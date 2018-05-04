/*
 * Copyright (c) 2018 by Botorabi. All rights reserved.
 * https://github.com/botorabi/NetMonitor
 *
 * License: MIT License (MIT), read the LICENSE text in
 *          main directory for more details.
 */
package net.vrfun.netmon.probe;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.Instant;
import java.util.*;


@RestController
public class RestService {

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ProbeRepository repository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private ProbeImporter probeImporter;

    @GetMapping(path = "/probes/count")
    Long count() {
        return repository.count();
    }

    @GetMapping(path = "/probes/create/{freq}/{timeStamp}")
    ProbeEntity createProbe(@PathVariable("freq") short freq, @PathVariable("timeStamp") Long timeStamp) {
        ProbeEntity probe = new ProbeEntity();
        probe.setFrequency(freq);
        probe.setTimeStamp(timeStamp == 0L ? Instant.now().getEpochSecond() : timeStamp);
        repository.save(probe);
        return probe;
    }

    @GetMapping(path="/probes/{from}/{to}")
    List<ProbeEntity> probesRange(@PathVariable("from") Long from, @PathVariable("to") Long to) {
        final long MAX_COUNT = 1000;

        long countEntries = repository.getCountByTimeStampRange(from, to);

        List<ProbeEntity> probes;
        if (countEntries <= MAX_COUNT) {
            probes = repository.findByTimeStampRange(from, to);
        }
        else {
            long stride = countEntries / MAX_COUNT;
            probes = repository.findByTimeStampRangeStride(from, to, stride);
        }

        return probes;
    }

    /**
     * Get a maximal of 4000 probes.
     */
    @GetMapping(path="/probes")
    List<ProbeEntity> allProbes() {
        List<ProbeEntity> probes = new ArrayList<>();
        Iterator<ProbeEntity> iterator = repository.findAll().iterator();
        for (int i = 0; i < 4000; ++i) {
            if (iterator.hasNext()) {
                probes.add(iterator.next());
            }
        }

        return probes;
    }

    @PostMapping(path="/probes/import")
    Response importProbes(@RequestParam("file") MultipartFile file) throws IOException {
        LOGGER.info("Uploading data file: {}", file.getOriginalFilename());

        //storageService.store(file);

        if (file.getSize() < 1) {
            return new Response("Invalid empty file!");
        }

        if (!file.getContentType().equalsIgnoreCase("text/plain")) {
            return new Response("Invalid non-text file type!");
        }

        probeImporter.performDataImport(file.getOriginalFilename(), file.getInputStream());

        return new Response("File upload was successful");
    }
}
