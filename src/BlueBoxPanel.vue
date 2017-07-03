<template>
    <div id="BlueBoxPanel">
        <div class="pad-row">
            <ToneButton freq1="2600" freq2="" name="2600hz" :context="audio_context"></ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="900" name="1" :context="audio_context"></ToneButton>
            <ToneButton freq1="700" freq2="1100" name="2" :context="audio_context"></ToneButton>
            <ToneButton freq1="900" freq2="1100" name="3" :context="audio_context"></ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="1300" name="4" :context="audio_context"></ToneButton>
            <ToneButton freq1="900" freq2="1300" name="5" :context="audio_context"></ToneButton>
            <ToneButton freq1="1100" freq2="1300" name="6" :context="audio_context"></ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="1500" name="7" :context="audio_context"></ToneButton>
            <ToneButton freq1="900" freq2="1500" name="8" :context="audio_context"></ToneButton>
            <ToneButton freq1="1100" freq2="1500" name="9" :context="audio_context"></ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="1100" freq2="1700" name="KP" :context="audio_context"></ToneButton>
            <ToneButton freq1="1300" freq2="1500" name="0" :context="audio_context"></ToneButton>
            <ToneButton freq1="1500" freq2="1700" name="ST" :context="audio_context"></ToneButton>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import ToneButton from "./ToneButton.vue";

export default {
    name: "BlueBoxPanel",
    data() {
        return {
            audio_context: null
        }
    },
    components: {
        ToneButton
    },
    created() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audio_context = new AudioContext();
    }
} 
</script>

<!-- --------------------------------------------------- -->

<style lang="scss" >
@font-face { 
    font-family: 'Bell'; 
    src: url('assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

#BlueBoxPanel {
    display: flex;
    flex-direction: column;
    background: #5299ff;
    width: 100%;
    height: 100%;
    font-family: "Bell";    

    .pad-row {
        flex: 1 1 auto;
        display: flex;

        .button {
            width: 33%;
            background: linear-gradient(to bottom, #3333FF 0%, #4444FF 100%);
            border-radius: 10%;
            border: 4px solid rgba(0,0,0,0.05);
            .label {
                color: #00FFFF;
            }
        }
    }
}
</style>