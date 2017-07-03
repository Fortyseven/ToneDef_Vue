<template>
    <div id="ExtrasUSPanel">
        <div class="pad-row">
            <ToneButton freq1="480" freq2="620" duration="500" space="500" name="Busy" :context="audio_context"></ToneButton>
        </div>
    </div>
</template>

<!-- ----------------------- -->
<script>
import ToneButton from '../ToneButton.vue';

export default {
    name: "ExtrasUSPanel",
    data() {
        return {
            audio_context: null
        }
    },
    components: {
        ToneButton
    },
    created() {
        this.audio_context = new AudioContext();
    }
};
</script>



<style lang="scss" scoped>
@font-face { 
    font-family: 'Bell'; 
    src: url('../../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

#ExtrasUSPanel {
    display: flex;
    flex-direction: column;
    background: green;
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