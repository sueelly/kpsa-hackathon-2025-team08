package com.eight.memory_garden.ui.gardener;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eight.memory_garden.core.annotation.UserId;
import com.eight.memory_garden.core.annotation.UserRole;
import com.eight.memory_garden.core.response.ApiResponse;
import com.eight.memory_garden.domain.user.Role;

@RestController
@RequestMapping("/gardener")
public class GardenerController {

    @PostMapping
    public ApiResponse<Void> saveGardenerChat(
        @UserId Long userId,
        @UserRole Role role,
        @RequestBody SaveGardenerChatRequest request) {

        return ApiResponse.success();
    }
}
