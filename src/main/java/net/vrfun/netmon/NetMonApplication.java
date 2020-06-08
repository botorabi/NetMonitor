/*
 * Copyright (c) 2018-2020 by Botorabi. All rights reserved.
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
}
