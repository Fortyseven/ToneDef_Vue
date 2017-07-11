<!-- ##### TONE BUTTON ##### -->

<template>
    <div class="button tone-button" :class="{ pressed : isPlaying }" v-touch="[playerStart, playerStop]">
        <div class="label">
            <slot></slot>
        </div>
    </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import MultiTonePlayer from "../audio/MultiTonePlayer";
import DualTonePeriodicPlayer from "../audio/DualTonePeriodicPlayer";

export default {
    name: "ToneButton",
    props: [
        'freqs', 'duration', 'space', 'name', 'context'
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
        var freqs = this.freqs.split(',');
        console.log(freqs);
        if (this.duration) {
            //this.player = new DualTonePeriodicPlayer(this.context, this.freq1, this.freq2, this.duration, this.space, this.name);
        } else {
            this.player = new MultiTonePlayer(this.context, freqs, this.name);
        }
    }
}
</script>

<!-- --------------------------------------------------- -->

<style lang="scss" scoped>
div .button {
    flex: 1 1 auto;

    background: white;

    border: 4px solid rgba(0, 0, 0, 0.05);
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