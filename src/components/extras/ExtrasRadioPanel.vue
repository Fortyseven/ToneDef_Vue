<!-- ##### EXTRAS US PANEL ##### -->
<!-- Imported from https://oona.windytan.com/blogfiles/pmrsounds/tones.cc.txt -->
<template>
    <div id="ExtrasContainer">
        <ToneSequenceButton name="ROG A1" :context="audio_context" :loop="false">
            <SequenceNode freqs="500" duration="120"></SequenceNode>
            <SequenceNode freqs="1000" duration="120"></SequenceNode>
            <SequenceNode freqs="2000" duration="120"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG A2" :context="audio_context" :loop="false">
            <SequenceNode freqs="503" duration="120"></SequenceNode>
            <SequenceNode freqs="1007" duration="120"></SequenceNode>
            <SequenceNode freqs="1950" duration="120"></SequenceNode>
        </ToneSequenceButton>

        <!-- Cobra AM845 -->

        <ToneSequenceButton name="ROG A3" :context="audio_context" :loop="false">
            <SequenceNode freqs="435" duration="100"></SequenceNode>
            <SequenceNode freqs="872" duration="100"></SequenceNode>
            <SequenceNode freqs="1742" duration="100"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG C1" :context="audio_context" :loop="false">
            <SequenceNode freqs="656" duration="50"></SequenceNode>
            <SequenceNode freqs="812" duration="50"></SequenceNode>
            <SequenceNode freqs="1000" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG C2" :context="audio_context" :loop="false">
            <SequenceNode freqs="601" duration="50"></SequenceNode>
            <SequenceNode freqs="801" duration="50"></SequenceNode>
            <SequenceNode freqs="1008" duration="100"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG D" :context="audio_context" :loop="false">
            <SequenceNode freqs="606" duration="50"></SequenceNode>
            <SequenceNode freqs="0" duration="50"></SequenceNode>
            <SequenceNode freqs="606" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG G" :context="audio_context" :loop="false">
            <SequenceNode freqs="500" duration="50"></SequenceNode>
            <SequenceNode freqs="640" duration="50"></SequenceNode>
            <SequenceNode freqs="500" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <!-- Baofeng UV-5RC -->

        <ToneSequenceButton name="ROG H" :context="audio_context" :loop="false">
            <SequenceNode freqs="1120" duration="135"></SequenceNode>
            <SequenceNode freqs="861" duration="200"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG I" :context="audio_context" :loop="false">
            <SequenceNode freqs="800" duration="30"></SequenceNode>
            <SequenceNode freqs="600" duration="30"></SequenceNode>
            <SequenceNode freqs="700" duration="30"></SequenceNode>
            <SequenceNode freqs="800" duration="30"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="ROG I2" :context="audio_context" :loop="false">
            <SequenceNode freqs="800" duration="100"></SequenceNode>
            <SequenceNode freqs="600" duration="30"></SequenceNode>
            <SequenceNode freqs="700" duration="30"></SequenceNode>
            <SequenceNode freqs="800" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING1" :context="audio_context" :loop="true">
            <SequenceNode freqs="500" duration="100"></SequenceNode>
            <SequenceNode freqs="750" duration="100"></SequenceNode>
        </ToneSequenceButton>

        <!-- Motorola TLKR T80 (MOT02) / T40 -->

        <ToneSequenceButton name="RING3" :context="audio_context" :loop="true">
            <SequenceNode freqs="2000" duration="50"></SequenceNode>
            <SequenceNode freqs="2200" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING5" :context="audio_context" :loop="true">
            <SequenceNode freqs="593" duration="55"></SequenceNode>
            <SequenceNode freqs="849" duration="55"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING5a" :context="audio_context" :loop="true">
            <SequenceNode freqs="600" duration="50"></SequenceNode>
            <SequenceNode freqs="900" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING5b" :context="audio_context" :loop="true">
            <SequenceNode freqs="656" duration="50"></SequenceNode>
            <SequenceNode freqs="961" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <!-- Motorola TLKR T80 (MOT01) -->

        <ToneSequenceButton name="RING7" :context="audio_context" :loop="true">
            <SequenceNode freqs="1190" duration="50"></SequenceNode>
            <SequenceNode freqs="992" duration="50"></SequenceNode>
            <SequenceNode freqs="807" duration="50"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING9" :context="audio_context" :loop="true">
            <SequenceNode freqs="1000" duration="120"></SequenceNode>
            <SequenceNode freqs="1100" duration="120"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING10" :context="audio_context" :loop="true">
            <SequenceNode freqs="1000" duration="120"></SequenceNode>
            <SequenceNode freqs="800" duration="120"></SequenceNode>
        </ToneSequenceButton>

        <ToneSequenceButton name="RING11" :context="audio_context" :loop="true">
            <SequenceNode freqs="900" duration="200"></SequenceNode>
            <SequenceNode freqs="600" duration="400"></SequenceNode>
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

#ExtrasContainer {
    display: flex;
    flex-wrap:wrap;
    background: linear-gradient(to bottom, #AAA 0%, #333 100%);
    width: 100%;
    height: 100%;
    font-family: "Bell";

    .tone-button,
    .tone-sequence-button,
    {
        flex: 1 1 auto;
        background: linear-gradient(to bottom, #AAA 0%, #EEE 100%);
        border: 4px solid rgba(0,0,0,0.05);
        .label {
            color: black;
            font-size: 0.9em;
        }
    }
}
</style>