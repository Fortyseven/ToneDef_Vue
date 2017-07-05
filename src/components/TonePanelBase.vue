<!-- template></template -->

<!-- --------------------------------------------------- -->

<script>
require('../assets/fonts/BellGothicStd-Black.woff');
require('../assets/fonts/BellGothicStd-Black.ttf');

import Vue from 'vue';
import ToneButton from "./ToneButton.vue";

export default Vue.extend({
    name: "TonePanelBase",
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
    },
    destroyed() {
        this.audio_context.close();
    }
});
</script>

<!-- --------------------------------------------------- -->

<style lang="scss">
@font-face { 
    font-family: 'Bell'; 
    src: url('../assets/fonts/BellGothicStd-Black.woff') format("woff"),
         url('../assets/fonts/BellGothicStd-Black.ttf') format("ttf");
}

.tone-panel {
    display: flex;
    padding: 1%;
    flex-direction: column;
    height: 100%;
    font-family: "Bell";

    .tone-panel-row {
        flex: 0 0 25%;
        display: flex;

        .button {
            background: white;
            width: 25%;
            .label {
                color: black;
            }
        }
    }
}
</style> 