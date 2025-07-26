package com.eight.memory_garden.common.exception.http;

import com.eight.memory_garden.common.exception.MemoryGardenException;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.code.ResultCode;

public class BadRequestException extends MemoryGardenException {

    private static final ResultCode resultCode = CommonResultCode.BAD_REQUEST;

    public BadRequestException() {
        super(resultCode);
    }

    public BadRequestException(ResultCode resultCode) {
        super(resultCode);
    }

    public BadRequestException(String message) {
        super(resultCode, message);
    }

    public BadRequestException(ResultCode resultCode, String message) {
        super(resultCode, message);
    }

    public BadRequestException(ResultCode resultCode, Throwable cause) {
        super(resultCode, cause);
    }

    public BadRequestException(ResultCode resultCode, String message, Throwable cause) {
        super(resultCode, message, cause);
    }
}
