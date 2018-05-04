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
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.*;

/**
 * Import probe entries from a given input stream.
 */
@Service
public class ProbeImporter {

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    private long totalImports;

    private final int COUNT_COLUMNS = 10;

    private List<ProbeEntity> probeCache = new ArrayList<>();
    private final Calendar calender;
    private long lastTimeStamp;
    private double averageFrequency = 0.0;
    private long countSamples = 0;

    private final ProbeRepository repository;

    @Autowired
    public ProbeImporter(ProbeRepository repository) {
        this.repository = repository;
        calender = (new Calendar.Builder()).build();
    }

    synchronized public void performDataImport(final String fileName, InputStream fileStream) {
        LOGGER.info("Importing file: {}", fileName);

        initializeImport();

        int countLines = 0, countSkipped = 0;
        String[] columns;
        Scanner scanner = new Scanner(fileStream);

        while (scanner.hasNextLine()) {
            countLines++;
            String line = scanner.nextLine();
            columns = line.split("\\s+");

            if (!importEntry(columns)) {
                countSkipped++;
            }
        }

        finalizeImport();

        totalImports++;

        LOGGER.info("File had {} lines, skipped invalid lines: {}, total imports: {}", countLines, countSkipped, totalImports);
    }

    private void finalizeImport() {
        addTimeStamp(lastTimeStamp);
        flushProbeCache();
    }

    private void initializeImport() {
        averageFrequency = 0.0;
        countSamples = 0;
        lastTimeStamp = 0;
    }

    private boolean importEntry(final String[] columns) {
        if (columns.length < COUNT_COLUMNS) {
            return false;
        }

        try {
            float frequency = Float.parseFloat(columns[0]);
            long timeStamp = getTimeStamp(columns);

            if (!checkTimeStampAndUpdateFrequency(timeStamp, frequency)) {
                return true;
            }

            addTimeStamp(timeStamp);
        }
        catch(NumberFormatException ex) {
            return false;
        }

        return true;
    }

    private boolean checkTimeStampAndUpdateFrequency(long timeStamp, float frequency) {
        if (countSamples == 0) {
            lastTimeStamp = timeStamp;
            averageFrequency = 0.0;
        }

        if (lastTimeStamp == timeStamp) {
            averageFrequency += frequency;
            countSamples++;
            return false;
        }

        return true;
    }

    private void addTimeStamp(long timeStamp) {
        if (countSamples < 1) {
            return;
        }

        float frequency = (float)(averageFrequency / (double)countSamples);
        countSamples = 0;

        if (addProbeToCache(frequency, timeStamp) > 10000) {
            flushProbeCache();
        }
    }

    private long getTimeStamp(String[] columns) {
        int day = Integer.parseUnsignedInt(columns[3]);
        int month = Integer.parseUnsignedInt(columns[4]) - 1;
        int year = Integer.parseUnsignedInt(columns[5]);
        int hour = Integer.parseUnsignedInt(columns[6]);
        int minute = Integer.parseUnsignedInt(columns[7]);
        int second = Integer.parseUnsignedInt(columns[8]);

        calender.set(year, month, day, hour, minute, second);

        return calender.getTimeInMillis() / 1000;
    }

    private int addProbeToCache(float frequency, long timeStamp) {
        short freq = (short)((50.0 - frequency) * 32767.0);
        ProbeEntity probe = new ProbeEntity();
        probe.setFrequency(freq);
        probe.setTimeStamp(timeStamp);
        probeCache.add(probe);
        return probeCache.size();
    }

    private void flushProbeCache() {
        if (probeCache.size() > 0) {
            repository.saveAll(probeCache);
            probeCache.clear();
        }
    }
}
