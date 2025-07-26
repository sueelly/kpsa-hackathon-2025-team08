package com.eight.memory_garden.core.jwt;

import java.util.Date;

import com.eight.memory_garden.core.security.Role;
import com.eight.memory_garden.core.security.TokenType;

public record JwtClaim(
    Long id,
    Long familyId,
    Role role,
    TokenType tokenType,
    Date expiration
) {
}
