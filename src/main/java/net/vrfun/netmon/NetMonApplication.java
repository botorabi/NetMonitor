/*
 * Copyright (c) 2018 by Botorabi. All rights reserved.
 * https://github.com/botorabi/NetMonitor
 *
 * License: MIT License (MIT), read the LICENSE text in
 *          main directory for more details.
 */
package net.vrfun.netmon;

import net.vrfun.netmon.probe.*;
import net.vrfun.netmon.storage.StorageProperties;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.*;

import java.time.Instant;
import java.util.Random;

@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigurationProperties(StorageProperties.class)
public class NetMonApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetMonApplication.class, args);
	}

	/**
	 * Setup the storage service.
	 */
	@Bean
	CommandLineRunner initStorage(StorageService storageService) {
		return (args) -> {
			storageService.deleteAll();
			storageService.init();
		};
	}

    /**
     * Enable CORS for Angular dev server
     */
	@Bean
	public WebMvcConfigurer allowAngularDevCORS() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200");
			}
		};
	}

	/**
	 * Create sample entries for probes repository.
	 */
	//@Bean
	public CommandLineRunner createSampleProbes(ProbeRepository repository) {
		return args -> {

			Random rand = new Random();
			Long timeStampBegin = Instant.now().getEpochSecond();

			Long timeStampEnd = timeStampBegin + 60 * 60;
			for (Long ts = timeStampBegin; ts < timeStampEnd; ++ts) {
				ProbeEntity probe = new ProbeEntity();
				probe.setFrequency((short) ((rand.nextInt() - 32767) >> 1));
				probe.setTimeStamp(ts);
				repository.save(probe);
			}
		};
	}
}
