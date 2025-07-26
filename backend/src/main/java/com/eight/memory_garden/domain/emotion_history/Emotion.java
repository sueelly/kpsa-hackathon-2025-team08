package com.eight.memory_garden.domain.emotion_history;

import lombok.RequiredArgsConstructor;
import lombok.Getter;

@Getter
@RequiredArgsConstructor
public enum Emotion {
    // 기뻐요 감사해요 평온해다 외로워요 불안해요
    HAPPY("기뻐요"),
    THANKFUL("감사해요"),
    PEACEFUL("평온해요"),
    LONELY("외로워요"),
    ANXIOUS("불안해요"),
    ;

    private final String description;
}
