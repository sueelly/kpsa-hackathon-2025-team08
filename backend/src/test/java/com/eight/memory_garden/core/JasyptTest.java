package com.eight.memory_garden.core;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.eight.memory_garden.acceptance.AcceptanceTest;

import org.springframework.beans.factory.annotation.Autowired;

import org.jasypt.encryption.StringEncryptor;

import org.junit.jupiter.api.Test;

public class JasyptTest extends AcceptanceTest {

    @Autowired
    private StringEncryptor stringEncryptor;

    @Test
    public void testEncrypt() {

        // given
        String sample = "sample";

        // when
        String encryptedSample = stringEncryptor.encrypt(sample);
        String decryptedSample = stringEncryptor.decrypt(encryptedSample);

        // then
        assertEquals(sample, decryptedSample);
    }
}
