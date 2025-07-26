package com.eight.memory_garden.ui.gardener;

import java.util.Date;

public record CreateGardenerChatRequest(
    Long medicineScheduleId,
    boolean takeMedicine,
    Emotion emotion,
    String content
) {

}
