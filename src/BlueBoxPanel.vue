<template>
    <div id="BlueBoxPanel">
        <div class="pad-row row1">
            <DualToneButton freq1="700" freq2="900" name="1" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="700" freq2="1100" name="2" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="900" freq2="1100" name="3" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row2">
            <DualToneButton freq1="700" freq2="1300" name="4" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="900" freq2="1300" name="5" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1100" freq2="1300" name="6" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row3">
            <DualToneButton freq1="700" freq2="1500" name="7" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="900" freq2="1500" name="8" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1100" freq2="1500" name="9" :context="audio_context"></DualToneButton>
        </div>
        <div class="pad-row row4">
            <DualToneButton freq1="1100" freq2="1700" name="KP" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1300" freq2="1500" name="0" :context="audio_context"></DualToneButton>
            <DualToneButton freq1="1500" freq2="1700" name="ST" :context="audio_context"></DualToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import DualToneButton from "./DualToneButton.vue";

export default {
    name: "BlueBoxPanel",
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

<style lang="scss" >
#BlueBoxPanel {
    display: flex;
    flex-direction: column;
    background: blue;
    width: 100%;
    height: 100%;

    .pad-row {
        flex: 1 1 auto;
        display: flex;

        .button {
            width: 33%;
            background: linear-gradient(to bottom, white 0%, darkcyan 10%, black 100%);
            border: none;
            .label {
                color: white !important;
            }
        }
    }
}
</style>