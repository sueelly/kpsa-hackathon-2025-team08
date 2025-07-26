package com.eight.memory_garden.common.exception.http;

import com.eight.memory_garden.common.exception.MemoryGardenException;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.code.ResultCode;

public class NotFoundException extends MemoryGardenException {

    private static final ResultCode resultCode = CommonResultCode.NOT_FOUND;

    public NotFoundException() {
        super(CommonResultCode.NOT_FOUND);
    }

    public NotFoundException(ResultCode resultCode) {
        super(resultCode);
    }

    public NotFoundException(String message) {
        super(resultCode, message);
    }

    public NotFoundException(ResultCode resultCode, String message) {
        super(resultCode, message);
    }

    public NotFoundException(ResultCode resultCode, Throwable cause) {
        super(resultCode, cause);
    }

    public NotFoundException(ResultCode resultCode, String message, Throwable cause) {
        super(resultCode, message, cause);
    }
}
