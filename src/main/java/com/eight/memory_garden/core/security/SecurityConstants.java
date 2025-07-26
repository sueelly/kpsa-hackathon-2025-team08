package com.eight.memory_garden.core.security;

import java.util.List;

public class SecurityConstants {

    // 필터링을 거치지 않는 URL들
    public static final List<String> BYPASS_URLS = List.of(
        "/hello"
    );

    // 모든 권한 허용 - 모든 메서드
    public static final List<String> PUBLIC_URLS = List.of(
        
        // Swagger UI 접근을 위한 엔드포인트들
        "/swagger-ui/**",
        "/v3/api-docs/**",
        "/swagger-resources/**",
        "/webjars/**"
    );

    // PATIENT 또는 NEXT_OF_KIN 권한 허용 - GET 요청만
    public static final List<String> PATIENT_OR_NEXT_OF_KIN_GET_URLS = List.of(
    );

    // NEXT_OF_KIN 권한만 허용 - 모든 메서드
    public static final List<String> NEXT_OF_KIN_URLS = List.of(
    );

    // PATIENT 권한만 허용 - 모든 메서드
    public static final List<String> PATIENT_URLS = List.of(
    );

    // PHARMACIST 권한만 허용 - 모든 메서드
    public static final List<String> PHARMACIST_URLS = List.of(
    );

    public static final String USER_NAME_CLAIM = "username";
    public static final String ROLE_CLAIM = "role";
    public static final String TOKEN_TYPE_CLAIM = "tokenType";
    public static final String FAMILY_ID_CLAIM = "familyId";

    public static final String FAMILY_ID_ATTRIBUTE = "FAMILY_ID";
    public static final String USER_ID_ATTRIBUTE = "USER_ID";
    public static final String USER_ROLE_ATTRIBUTE = "USER_ROLE";

    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String REISSUE_COOKIE_NAME = "RefreshToken";
    public static final String AUTH_SCHEME_PREFIX = "Bearer ";
}
