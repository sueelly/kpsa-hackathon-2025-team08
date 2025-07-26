package com.eight.memory_garden.utils;

import java.util.Map;

import com.eight.memory_garden.core.security.SecurityConstants;

public class AuthHeaderProvider {

    public static Map<String, Object> createAuthorizationHeader(String accessToken) {
        return Map.of(SecurityConstants.AUTHORIZATION_HEADER,
                SecurityConstants.AUTH_SCHEME_PREFIX + accessToken);
    }

    public static Map<String, Object> createEmptyHeader() {
        return Map.of();
    }
}
