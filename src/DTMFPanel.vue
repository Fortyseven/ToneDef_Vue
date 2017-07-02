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

<style scoped>
    #DTMFPanel {
        display: flex;
        flex-direction: column;
        background-image: -webkit-gradient(linear, left top, left bottom, from(black), to(#444));
        background-image: -webkit-linear-gradient(top, black, #444);
        image: -moz-linear -gradient(top, black, #444);
        background-image: linear-gradient(to bottom, black, #444);
        height: 100vh;
    }

    .pad-row {
        flex: 1 1 33%;
        display: flex;
    }
</style>