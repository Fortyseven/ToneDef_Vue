<!-- ##### TONE SEQUENCE BUTTON ##### -->

<template>
    <div v-touch="[onPressStart, onPressStop]" class="button tone-sequence-button" :class="{ pressed : isPlaying }">
        <div class="label">{{ name }}</div>
    </div>
</template>

<!-- ----------------------- -->
<script>
import ToneSequence from '../audio/ToneSequence';

export default {
    name: 'ToneSequenceButton',
    props: {
        context: AudioContext, 
        name: String,
        loop: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            sequence: null,
            isPlaying: false
        }
    },
    created() {
        this.sequence = new ToneSequence(this.context, this.loop);

        for (var i in this.$slots.default) {
            var node_el = this.$slots.default[i];
            if (node_el && node_el.data) {
                var opts = node_el.data.attrs;
                opts.freqs = opts.freqs.split(',');
                this.sequence.addSequenceNode(opts);
            }
        }
    },
    methods: {
        onPressStart() {
            this.sequence.play();
            this.isPlaying = true;
        },
        onPressStop() {
            this.isPlaying = false;
            this.sequence.stop();
        }
    }
};
</script>

<!-- ----------------------- -->
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
        font-size: 12pt;
        font-weight: bold;
        line-height: 0;
    }

    transition: 500ms top,
    100ms opacity;
    position: relative;
    &.pressed {
        opacity: 0.75;
        top: 0.25em;
    }
}
</style>