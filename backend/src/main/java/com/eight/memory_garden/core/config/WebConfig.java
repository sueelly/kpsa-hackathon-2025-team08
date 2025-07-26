package com.eight.memory_garden.core.config;

import com.eight.memory_garden.core.interceptor.AuthenticationInterceptor;
import com.eight.memory_garden.core.resolver.UserIdArgumentResolver;
import com.eight.memory_garden.core.resolver.UserRoleArgumentResolver;
import com.eight.memory_garden.core.security.SecurityConstants;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    private final UserIdArgumentResolver userIdArgumentResolver;
    private final UserRoleArgumentResolver userRoleArgumentResolver;
    private final AuthenticationInterceptor authenticationInterceptor;

    public WebConfig(
        UserIdArgumentResolver userIdArgumentResolver,
        UserRoleArgumentResolver userRoleArgumentResolver,
        AuthenticationInterceptor authenticationInterceptor) {

        this.userIdArgumentResolver = userIdArgumentResolver;
        this.userRoleArgumentResolver = userRoleArgumentResolver;
        this.authenticationInterceptor = authenticationInterceptor;
    }

    @Override
    public void addArgumentResolvers(@NonNull List<HandlerMethodArgumentResolver> resolvers) {

        WebMvcConfigurer.super.addArgumentResolvers(resolvers);
        resolvers.add(this.userIdArgumentResolver);
        resolvers.add(this.userRoleArgumentResolver);
    }

    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {

        registry.addInterceptor(this.authenticationInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(SecurityConstants.BYPASS_URLS);
    }
}
