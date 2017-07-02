<template>
    <div class="button" :class="{ pressed : isPlaying }" v-touch="[playerStart, playerStop]">
        <div class="label">
            {{name}}
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import DualTonePlayer from "./DualTonePlayer";

export default {
    name: "DualToneButton",
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

    background: #d5cea6;
    background: linear-gradient(to bottom, white 0%, #c9c190 10%, gold 100%);

    border: 4px inset gold;
    margin: 0.25em;
    user-select: none;
    cursor: pointer;
    position: relative;

    .label {
        position: relative;
        bottom: -50%;
        color: black;
        text-align: center;
        font-size: 36pt;
        font-weight: bold;
        line-height: 0;
    }

    &.pressed {
        opacity: 0.5;
    }
}
</style>