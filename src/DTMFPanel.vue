<template>
    <div id="DTMFPanel">
        <div class="pad-row row1">
            <DualToneButton freq1="1209" freq2="697" name="1" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1336" freq2="697" name="2" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1477" freq2="697" name="3" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1633" freq2="697" name="A" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row2">
            <DualToneButton freq1="1209" freq2="770" name="4" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1336" freq2="770" name="5" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1477" freq2="770" name="6" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1633" freq2="770" name="B" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row3">
            <DualToneButton freq1="1209" freq2="852" name="7" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1336" freq2="852" name="8" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1477" freq2="852" name="9" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1633" freq2="852" name="C" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row4">
            <DualToneButton freq1="1209" freq2="941" name="*" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1336" freq2="941" name="0" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1477" freq2="941" name="#" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1633" freq2="941" name="D" :context="audio_context"></DualToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
require('./assets/fonts/BellGothicStd-Black.woff');
require('./assets/fonts/BellGothicStd-Black.ttf');

import DualToneButton from "./DualToneButton.vue";

export default {
    name: "DTMFPanel",
    data() {
        return {
            audio_context: null
        }
    },
    components: {
        DualToneButton
    },
    created() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audio_context = new AudioContext();
    }
} 
</script>

<!-- --------------------------------------------------- -->

<style lang="scss">
@font-face { 
    font-family: 'Bell'; 
    src: url('assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('assets/fonts/BellGothicStd-Black.ttf') format("ttf");
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
            border: none;
            width: 25%;
            .label {
                color: black;
            }
        }
    }
}
</style> 