<template>
    <div id="DTMFPanel" class="tone-panel">
        <div class="tone-panel-row">
            <ToneButton freqs="1209,697" :context="audio_context">1</ToneButton>
            <ToneButton freqs="1336,697" :context="audio_context">2</ToneButton>
            <ToneButton freqs="1477,697" :context="audio_context">3</ToneButton>
            <ToneButton freqs="1633,697" :context="audio_context">A</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="1209,770" :context="audio_context">4</ToneButton>
            <ToneButton freqs="1336,770" :context="audio_context">5</ToneButton>
            <ToneButton freqs="1477,770" :context="audio_context">6</ToneButton>
            <ToneButton freqs="1633,770" :context="audio_context">B</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="1209,852" :context="audio_context">7</ToneButton>
            <ToneButton freqs="1336,852" :context="audio_context">8</ToneButton>
            <ToneButton freqs="1477,852" :context="audio_context">9</ToneButton>
            <ToneButton freqs="1633,852" :context="audio_context">C</ToneButton>
        </div>
        <div class="tone-panel-row">
            <ToneButton freqs="1209,941" :context="audio_context">*</ToneButton>
            <ToneButton freqs="1336,941" :context="audio_context">0</ToneButton>
            <ToneButton freqs="1477,941" :context="audio_context">#</ToneButton>
            <ToneButton freqs="1633,941" :context="audio_context">D</ToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>

import Vue from 'vue';
import TonePanelBase from './TonePanelBase.vue';

export default TonePanelBase.extend({
    name: 'DTMFPanel'
});

</script>

<!-- --------------------------------------------------- -->

<style lang="scss">
@font-face { 
    font-family: 'Bell'; 
    src: url('../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

#DTMFPanel {
    background: brown;

    .tone-panel-row {
        flex: 0 0 25%;

        .button {
            background: linear-gradient(to bottom, #ffee00 0%, #ffcc00 100%);
            border-radius: 10%;
            width: 25%;
        }
    }
}
</style> 