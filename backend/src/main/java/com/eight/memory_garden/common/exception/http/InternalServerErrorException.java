package com.eight.memory_garden.common.exception.http;

import com.eight.memory_garden.common.exception.MemoryGardenException;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.code.ResultCode;

public class InternalServerErrorException extends MemoryGardenException {

    private static final ResultCode DEFAULT_RESULT_CODE = CommonResultCode.INTERNAL_SERVER_ERROR;

    public InternalServerErrorException() {
        super(DEFAULT_RESULT_CODE);
    }

    public InternalServerErrorException(ResultCode resultCode) {
        super(resultCode);
    }

    public InternalServerErrorException(String message) {
        super(DEFAULT_RESULT_CODE, message);
    }

    public InternalServerErrorException(ResultCode resultCode, String message) {
        super(resultCode, message);
    }

    public InternalServerErrorException(ResultCode resultCode, Throwable cause) {
        super(resultCode, cause);
    }

    public InternalServerErrorException(ResultCode resultCode, String message, Throwable cause) {
        super(resultCode, message, cause);
    }
}
