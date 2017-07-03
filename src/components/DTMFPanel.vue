<template>
    <div id="DTMFPanel">
        <div class="pad-row row1">
            <ToneButton freq1="1209" freq2="697" :context="audio_context">1</ToneButton>
            <ToneButton freq1="1336" freq2="697" :context="audio_context">2</ToneButton>
            <ToneButton freq1="1477" freq2="697" :context="audio_context">3</ToneButton>
            <ToneButton freq1="1633" freq2="697" :context="audio_context">A</ToneButton>
        </div>
        <div class="pad-row row2">
            <ToneButton freq1="1209" freq2="770" :context="audio_context">4</ToneButton>
            <ToneButton freq1="1336" freq2="770" :context="audio_context">5</ToneButton>
            <ToneButton freq1="1477" freq2="770" :context="audio_context">6</ToneButton>
            <ToneButton freq1="1633" freq2="770" :context="audio_context">B</ToneButton>
        </div>
        <div class="pad-row row3">
            <ToneButton freq1="1209" freq2="852" :context="audio_context">7</ToneButton>
            <ToneButton freq1="1336" freq2="852" :context="audio_context">8</ToneButton>
            <ToneButton freq1="1477" freq2="852" :context="audio_context">9</ToneButton>
            <ToneButton freq1="1633" freq2="852" :context="audio_context">C</ToneButton>
        </div>
        <div class="pad-row row4">
            <ToneButton freq1="1209" freq2="941" :context="audio_context">*</ToneButton>
            <ToneButton freq1="1336" freq2="941" :context="audio_context">0</ToneButton>
            <ToneButton freq1="1477" freq2="941" :context="audio_context">#</ToneButton>
            <ToneButton freq1="1633" freq2="941" :context="audio_context">D</ToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
require('../assets/fonts/BellGothicStd-Black.woff');
require('../assets/fonts/BellGothicStd-Black.ttf');

import ToneButton from "./ToneButton.vue";

export default {
    name: "DTMFPanel",
    data() {
        return {
            audio_context: null
        }
    },
    components: {
        ToneButton
    },
    created() {
        console.warn("created");
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audio_context = new AudioContext();
    },
    destroyed() {
        console.warn("destroyed");
        this.audio_context.close();
    }
} 
</script>

<!-- --------------------------------------------------- -->

<style lang="scss">
@font-face { 
    font-family: 'Bell'; 
    src: url('../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

#DTMFPanel {
    display: flex;
    padding: 1%;
    flex-direction: column;
    height: 100%;
    background: brown;
    font-family: "Bell";

    .pad-row {
        flex: 0 0 25%;
        display: flex;

        .button {
            background: linear-gradient(to bottom, #ffee00 0%, #ffcc00 100%);
            border-radius: 10%;
            // border: none;
            width: 25%;
            .label {
                color: black;
            }
        }
    }
}
</style> 