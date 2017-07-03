<template>
    <div class="button" :class="{ pressed : isPlaying }" v-touch="[playerStart, playerStop]">
        <div class="label">
            {{name}}
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import DualTonePlayer from "../DualTonePlayer";

export default {
    name: "ToneButton",
    props: [
        'freq1', 'freq2', 'duration', 'name', 'context'
    ],
    data() {
        return {
            player: null,
            isPlaying: false
        }
    },
    methods: {
        playerStart(e) {
            this.player.startPlaying();
            this.isPlaying = true;
        },
        playerStop() {
            this.player.stopPlaying();
            this.isPlaying = false;
        }
    },
    created() {
        this.player = new DualTonePlayer(this.context, this.freq1, this.freq2, this.name);
    }
}
</script>

<!-- --------------------------------------------------- -->

<style lang="scss" scoped>
div .button {
    flex: 1 1 auto;

    background: white;

    border: 4px solid rgba(0,0,0,0.05);
    margin: 0.45em;
    user-select: none;
    cursor: pointer;
    position: relative;
    box-shadow: 0.2em 0.2em 9px 1px rgba(0, 0, 0, 0.75);

    .label {
        position: relative;
        bottom: -50%;
        color: black;
        text-align: center;
        font-size: 36pt;
        font-weight: bold;
        line-height: 0;
    }

    transition: 500ms top, 100ms opacity;
    position: relative;
    &.pressed {
        opacity: 0.75;
        top: 0.25em;
    }
}
</style>