package com.eight.memory_garden.ui.gardener;

import com.eight.memory_garden.domain.emotion_history.Emotion;

public record SaveGardenerChatRequest(
    Long medicineScheduleId,
    boolean takeMedicine,
    Emotion emotion,
    String content
) {

}
