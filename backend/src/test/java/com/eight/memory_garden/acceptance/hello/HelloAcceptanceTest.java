package com.eight.memory_garden.acceptance.hello;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayNameGeneration;
import com.eight.memory_garden.acceptance.AcceptanceTest;
import com.eight.memory_garden.acceptance.hello.steps.HelloSteps;
import com.eight.memory_garden.common.response.ApiResponse;
import com.eight.memory_garden.common.exception.code.CommonResultCode;

import io.restassured.response.Response;
import io.restassured.common.mapper.TypeRef;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayNameGenerator.ReplaceUnderscores;

@DisplayNameGeneration(ReplaceUnderscores.class)
public class HelloAcceptanceTest extends AcceptanceTest {

    @Test
    public void hello() {

        Response response = HelloSteps.getHello();
        log.info("response: {}", response.asString());
        ApiResponse<String> apiResponse = response.as(new TypeRef<ApiResponse<String>>() {});

        // status code: 200
        assertEquals(200, response.statusCode());
        // code: COM000
        assertEquals(CommonResultCode.SUCCESS.getCode(), apiResponse.code());
        // message: Success
        assertEquals(CommonResultCode.SUCCESS.getMessage(), apiResponse.message());
        // data: Hello, Memory Garden!
        assertEquals("Hello, Memory Garden!", apiResponse.data());
    }
}
