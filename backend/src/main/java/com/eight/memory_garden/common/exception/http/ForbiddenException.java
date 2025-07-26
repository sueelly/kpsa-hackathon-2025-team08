package com.eight.memory_garden.common.exception.http;

import com.eight.memory_garden.common.exception.MemoryGardenException;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.code.ResultCode;

public class ForbiddenException extends MemoryGardenException {

    private static final ResultCode resultCode = CommonResultCode.FORBIDDEN;

    public ForbiddenException() {
        super(resultCode);
    }

    public ForbiddenException(ResultCode resultCode) {
        super(resultCode);
    }

    public ForbiddenException(String message) {
        super(resultCode, message);
    }

    public ForbiddenException(ResultCode resultCode, String message) {
        super(resultCode, message);
    }

    public ForbiddenException(ResultCode resultCode, Throwable cause) {
        super(resultCode, cause);
    }

    public ForbiddenException(ResultCode resultCode, String message, Throwable cause) {
        super(resultCode, message, cause);
    }
}
