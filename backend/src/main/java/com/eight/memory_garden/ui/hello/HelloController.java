package com.eight.memory_garden.ui.hello;

import com.eight.memory_garden.common.response.ApiResponse;
import com.eight.memory_garden.core.annotation.FamilyId;
import com.eight.memory_garden.core.annotation.UserId;
import com.eight.memory_garden.core.annotation.UserRole;
import com.eight.memory_garden.core.security.Role;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public ApiResponse<String> hello() {
        return ApiResponse.success("Hello, Memory Garden!");
    }

    @GetMapping("/auth")
    public ApiResponse<String> helloAuth(@UserId Long userId, @FamilyId Long familyId, @UserRole Role role) {
        return ApiResponse.success("Hello, Memory Garden! " + userId + " " + role.name());
    }
}
