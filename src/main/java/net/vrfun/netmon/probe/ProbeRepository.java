/*
 * Copyright (c) 2018 by Botorabi. All rights reserved.
 * https://github.com/botorabi/NetMonitor
 *
 * License: MIT License (MIT), read the LICENSE text in
 *          main directory for more details.
 */
package net.vrfun.netmon.probe;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//@Transactional
public interface ProbeRepository extends CrudRepository<ProbeEntity, Long> {

    @Query("select COUNT(*) from ProbeEntity probe where timeStamp >= :from and timeStamp <= :to")
    Long getCountByTimeStampRange(@Param("from") Long from, @Param("to") Long to);

    @Query("select probe from ProbeEntity probe where timeStamp >= :from and timeStamp <= :to order by timeStamp")
    List<ProbeEntity> findByTimeStampRange(@Param("from") Long from, @Param("to") Long to);

    @Query("select probe from ProbeEntity probe where timeStamp >= :from and timeStamp <= :to and (probe.id%:stride = 0) order by timeStamp")
    List<ProbeEntity> findByTimeStampRangeStride(@Param("from") Long from, @Param("to") Long to, @Param("stride") Long stride);
}
