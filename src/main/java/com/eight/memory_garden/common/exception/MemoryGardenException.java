package com.eight.memory_garden.common.exception;

import com.eight.memory_garden.common.exception.code.ResultCode;

import lombok.Getter;

@Getter
public class MemoryGardenException extends RuntimeException {

    private final ResultCode resultCode;

    public MemoryGardenException(ResultCode resultCode) {
        super(resultCode.getMessage());
        this.resultCode = resultCode;
    }

    public MemoryGardenException(ResultCode resultCode, String message) {
        super(message);
        this.resultCode = resultCode;
    }
    
    public MemoryGardenException(ResultCode resultCode, Throwable cause) {
        super(cause);
        this.resultCode = resultCode;
    }

    public MemoryGardenException(ResultCode resultCode, String message, Throwable cause) {
        super(message, cause);
        this.resultCode = resultCode;
    }
}
