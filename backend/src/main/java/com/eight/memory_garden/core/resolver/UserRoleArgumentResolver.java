package com.eight.memory_garden.core.resolver;

import com.eight.memory_garden.core.annotation.UserRole;
import com.eight.memory_garden.common.exception.code.CommonResultCode;
import com.eight.memory_garden.common.exception.http.UnauthorizedException;
import com.eight.memory_garden.core.security.SecurityConstants;
import com.eight.memory_garden.core.security.Role;

import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;


@Component
public class UserRoleArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(@NonNull MethodParameter parameter) {

        return parameter.getParameterType()
                .equals(Role.class) 
                && parameter.hasParameterAnnotation(UserRole.class);
    }

    @Override
    public Object resolveArgument(@NonNull MethodParameter parameter,
                                @Nullable ModelAndViewContainer mavContainer,
                                @NonNull NativeWebRequest webRequest,
                                @Nullable WebDataBinderFactory binderFactory) throws Exception {

        final Object roleObj = webRequest
                .getAttribute(SecurityConstants.USER_ROLE_ATTRIBUTE, NativeWebRequest.SCOPE_REQUEST);
        if (roleObj == null) {
            throw new UnauthorizedException(CommonResultCode.UNAUTHORIZED);
        }
        return (Role) roleObj;
    }
}
