/*
 * Copyright (c) 2018 by Botorabi. All rights reserved.
 * https://github.com/botorabi/NetMonitor
 *
 * License: MIT License (MIT), read the LICENSE text in
 *          main directory for more details.
 */
package net.vrfun.netmon.probe;


import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ProbeResponseTest {

    @Test
    void constructor() {
        Response response = new Response("test");
        assertThat(response.getText()).isEqualTo("test");
    }
}
