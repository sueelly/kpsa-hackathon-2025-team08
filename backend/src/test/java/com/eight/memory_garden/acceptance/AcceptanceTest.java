package com.eight.memory_garden.acceptance;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;

@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestExecutionListeners(
    listeners = {AcceptanceTestExecutionListener.class},
    mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS
)
public abstract class AcceptanceTest {

    protected static final Logger log = LoggerFactory.getLogger(AcceptanceTest.class);

    protected String loginPatient() {
        return "patient";
    }

    protected String loginNextOfKin() {
        return "nextOfKin";
    }
}
