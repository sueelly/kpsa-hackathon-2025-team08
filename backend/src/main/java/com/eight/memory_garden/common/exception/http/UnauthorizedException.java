package com.eight.memory_garden.common.exception.http;

import com.eight.memory_garden.common.exception.MemoryGardenException;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.code.ResultCode;

public class UnauthorizedException extends MemoryGardenException {

    private static final ResultCode DEFAULT_RESULT_CODE = CommonResultCode.UNAUTHORIZED;

    public UnauthorizedException() {
        super(DEFAULT_RESULT_CODE);
    }

    public UnauthorizedException(String message) {
        super(DEFAULT_RESULT_CODE, message);
    }

    public UnauthorizedException(ResultCode resultCode) {
        super(resultCode);
    }

    public UnauthorizedException(ResultCode resultCode, String message) {
        super(resultCode, message);
    }

    public UnauthorizedException(ResultCode resultCode, Throwable cause) {
        super(resultCode, cause);
    }

    public UnauthorizedException(ResultCode resultCode, String message, Throwable cause) {
        super(resultCode, message, cause);
    }
}
