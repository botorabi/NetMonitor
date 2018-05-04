/*
 * Copyright (c) 2018 by Botorabi. All rights reserved.
 * https://github.com/botorabi/NetMonitor
 *
 * License: MIT License (MIT), read the LICENSE text in
 *          main directory for more details.
 */
/*
* Copyright (c) 2018 by Botorabi. All rights reserved.
* https://github.com/botorabi/PowerNetMonitor
*
* License: MIT License (MIT), read the LICENSE text in
*          main directory for more details.
*/
package net.vrfun.netmon;

import org.springframework.context.*;
import org.springframework.context.annotation.*;


@Configuration
@ComponentScan("net.vrfun.netmon")
public class NetMonConfiguration implements ApplicationContextAware {

    private ApplicationContext applicationContext;

    public void setApplicationContext(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }
}