package com.eight.memory_garden.core.config;

import com.eight.memory_garden.core.jwt.JwtAccessDeniedHandler;
import com.eight.memory_garden.core.jwt.JwtAuthenticationEntryPoint;
import com.eight.memory_garden.core.jwt.JwtAuthenticationFilter;
import com.eight.memory_garden.core.jwt.JwtUtils;
import com.eight.memory_garden.core.security.Role;
import com.eight.memory_garden.core.security.SecurityConstants;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    private final JwtUtils jwtUtils;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    public SecurityConfig(JwtUtils jwtUtils, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler) {
        this.jwtUtils = jwtUtils;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        return http
            .csrf(AbstractHttpConfigurer::disable)
            .formLogin(AbstractHttpConfigurer::disable)
            .httpBasic(AbstractHttpConfigurer::disable)
            .logout(AbstractHttpConfigurer::disable)
            .sessionManagement(sessionManagement -> sessionManagement
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorizeRequests -> authorizeRequests

                // 모든 권한 허용
                .requestMatchers(SecurityConstants.PUBLIC_URLS.toArray(String[]::new)).permitAll()
                
                // PATIENT 또는 NEXT_OF_KIN 권한
                .requestMatchers(SecurityConstants.PATIENT_OR_NEXT_OF_KIN_GET_URLS.toArray(String[]::new))
                    .hasAnyRole(Role.PATIENT.name(), Role.NEXT_OF_KIN.name())

                // NEXT_OF_KIN 권한
                .requestMatchers(SecurityConstants.NEXT_OF_KIN_URLS.toArray(String[]::new)).hasRole(Role.NEXT_OF_KIN.name())
                
                // PATIENT 권한
                .requestMatchers(SecurityConstants.PATIENT_URLS.toArray(String[]::new)).hasRole(Role.PATIENT.name())
                
                // PHARMACIST 권한
                .requestMatchers(SecurityConstants.PHARMACIST_URLS.toArray(String[]::new)).hasRole(Role.PHARMACIST.name())
                
                .anyRequest().authenticated())

            .exceptionHandling(exception -> exception
                    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                    .accessDeniedHandler(jwtAccessDeniedHandler))
            .addFilterBefore(new JwtAuthenticationFilter(jwtUtils), 
                    UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    WebSecurityCustomizer webSecurityCustomizer() {
        
        return web -> web.ignoring()
            .requestMatchers(SecurityConstants.BYPASS_URLS.toArray(String[]::new));
    }
}
