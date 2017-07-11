<!-- ##### RED BOX PANEL ##### -->

<template>
    <div id="RedBoxPanel" class="tone-panel">
        <div class="tone-panel-row">
            <ToneButton freqs="700,900" :context="audio_context">1</ToneButton>
            <ToneButton freqs="700,1100" :context="audio_context">2</ToneButton>
            <ToneButton freqs="900,1100" :context="audio_context">3</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="700,1300" :context="audio_context">4</ToneButton>
            <ToneButton freqs="900,1300" :context="audio_context">5</ToneButton>
            <ToneButton freqs="1100,1300" :context="audio_context">6</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="700,1500" :context="audio_context">7</ToneButton>
            <ToneButton freqs="900,1500" :context="audio_context">8</ToneButton>
            <ToneButton freqs="1100,1500" :context="audio_context">9</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="1100,1700" :context="audio_context">KP</ToneButton>
            <ToneButton freqs="1300,1500" :context="audio_context">0</ToneButton>
            <ToneButton freqs="1500,1700" :context="audio_context">ST</ToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>

import Vue from 'vue';
import TonePanelBase from "./TonePanelBase.vue";

export default TonePanelBase.extend({
    name: "RedBoxPanel"
});

</script>

<!-- --------------------------------------------------- -->

<style lang="scss">
#RedBoxPanel {
    &.tone-panel {
        background: #300;

        .tone-panel-row {
            flex: 1 1 auto;
            display: flex;

            .button {
                width: 33%;
                background: linear-gradient(to bottom, darkred 0%, red 100%);
                border-radius: 10%;
                border: 4px solid rgba(0, 0, 0, 0.05);
                .label {
                    color: yellow;
                }
            }
        }
    }
}
</style>