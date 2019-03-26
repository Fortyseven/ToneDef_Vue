<!-- ##### EXTRAS US PANEL ##### -->

<template>
    <div id="ExtrasUSPanel">
        <ToneButton freqs="350,440" :context="audio_context">Dial Tone</ToneButton>

        <ToneSequenceButton name="Busy" :context="audio_context">
            <SequenceNode freqs="480,620" duration="500"></SequenceNode>
            <SequenceNode freqs="0" duration="500"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="Fast Busy" :context="audio_context" :loop="true">
            <SequenceNode freqs="480,620" duration="250"></SequenceNode>
            <SequenceNode freqs="0" duration="250"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="Off Hook" :context="audio_context">
            <SequenceNode freqs="1440,2060,2450,2600" duration="100"></SequenceNode>
            <SequenceNode freqs="0" duration="100"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="Ringback" :context="audio_context">
            <SequenceNode freqs="440, 480" duration="2000"></SequenceNode>
            <SequenceNode freqs="0" duration="4000"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="SIS Ineffective" :context="audio_context">
            <SequenceNode freqs="914" duration="380"></SequenceNode>
            <SequenceNode freqs="1429" duration="276"></SequenceNode>
            <SequenceNode freqs="1777" duration="380"></SequenceNode>
            <SequenceNode freqs="0" duration="750"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="SIS Intercept" :context="audio_context">
            <SequenceNode freqs="914" duration="276"></SequenceNode>
            <SequenceNode freqs="1371" duration="276"></SequenceNode>
            <SequenceNode freqs="1777" duration="380"></SequenceNode>
            <SequenceNode freqs="0" duration="750"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="SIS No Circuit" :context="audio_context" :loop="true">
            <SequenceNode freqs="1400, 2060, 2450, 2600" duration="100"></SequenceNode>
            <SequenceNode freqs="0" duration="100"></SequenceNode>
        </ToneSequenceButton>
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
    flex-wrap:wrap;
    background: linear-gradient(to bottom, #AAA 0%, #333 100%);
    width: 100%;
    height: 100%;
    font-family: "Bell";

    .tone-button,
    .tone-sequence-button,
    {
        flex: 1 1 46%;
        background: linear-gradient(to bottom, #AAA 0%, #EEE 100%);
        border: 4px solid rgba(0,0,0,0.05);
        .label {
            color: black;
            font-size: 0.9em;
        }
    }
}
</style>