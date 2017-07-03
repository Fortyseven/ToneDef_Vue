<template>
    <div id="BlueBoxPanel">
        <div class="pad-row">
            <ToneButton freq1="2600" freq2="" :context="audio_context">2600hz</ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="900" :context="audio_context">1</ToneButton>
            <ToneButton freq1="700" freq2="1100" :context="audio_context">2</ToneButton>
            <ToneButton freq1="900" freq2="1100" :context="audio_context">3</ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="1300" :context="audio_context">4</ToneButton>
            <ToneButton freq1="900" freq2="1300" :context="audio_context">5</ToneButton>
            <ToneButton freq1="1100" freq2="1300" :context="audio_context">6</ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="700" freq2="1500" :context="audio_context">7</ToneButton>
            <ToneButton freq1="900" freq2="1500" :context="audio_context">8</ToneButton>
            <ToneButton freq1="1100" freq2="1500" :context="audio_context">9</ToneButton>
        </div>
        <div class="pad-row">
            <ToneButton freq1="1100" freq2="1700" :context="audio_context">KP</ToneButton>
            <ToneButton freq1="1300" freq2="1500" :context="audio_context">0</ToneButton>
            <ToneButton freq1="1500" freq2="1700" :context="audio_context">ST</ToneButton>
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

<style lang="scss" >
@font-face {
    font-family: 'Bell';
    src: url('../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
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
            border: 4px solid rgba(0, 0, 0, 0.05);
            .label {
                color: #00FFFF;
            }
        }
    }
}
</style>