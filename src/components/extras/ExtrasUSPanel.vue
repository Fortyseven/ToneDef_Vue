<!-- ##### EXTRAS US PANEL ##### -->

<template>
    <div id="ExtrasUSPanel">
        <div class="pad-row">
            <ToneSequenceButton name="Busy" :context="audio_context">
                <SequenceNode freqs="480,620" duration="500"></SequenceNode>
                <SequenceNode freqs="0" duration="500"></SequenceNode>
            </ToneSequenceButton>
            <ToneSequenceButton name="Off Hook" :context="audio_context">
                <SequenceNode freqs="1440,2060,2450,2600" duration="100"></SequenceNode>
                <SequenceNode freqs="0" duration="100"></SequenceNode>
            </ToneSequenceButton>
        </div>
        <div class="pad-row">
            <ToneButton freqs="350,440" :context="audio_context">Dial Tone</ToneButton>
            <ToneSequenceButton name="Ringback" :context="audio_context">
                <SequenceNode freqs="440, 480" duration="2000"></SequenceNode>
                <SequenceNode freqs="0" duration="4000"></SequenceNode>
            </ToneSequenceButton>            
        </div>
    </div>
</template>

<!-- ----------------------- -->
<script>
    import ToneButton from '../ToneButton.vue';
    import ToneSequenceButton from '../ToneSequenceButton.vue';
    import Icon from 'vue-awesome';

    export default {
        name: "ExtrasUSPanel",
        data() {
            return {
                audio_context: null
            }
        },
        components: {
            ToneButton, ToneSequenceButton, Icon
        },
        created() {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audio_context = new AudioContext();
        }
    };
</script>

<!-- ----------------------- -->
<style lang="scss">
@font-face {
    font-family: 'Bell';
    src: url('../../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

#ExtrasUSPanel {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #AAA 0%, #333 100%);
    width: 100%;
    height: 100%;
    font-family: "Bell";    

    .pad-row {
        flex: 1 1 auto;
        display: flex;

        .button {
            // width: 33%;
            background: linear-gradient(to bottom, #AAA 0%, #EEE 100%);
            // border-radius: 10%;
            border: 4px solid rgba(0,0,0,0.05);
            width: 50%;
            .label {
                color: black;
                font-size: 24pt;
            }
        }
    }
}
</style>