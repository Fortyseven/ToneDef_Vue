"use strict";
export default class MultiTonePlayer {
    constructor(context, ...freqs) {
        this.name = name;
        this.context = context;

        this.oscillators = [];
        for (var i in freqs[0]) {
            var f = freqs[0][i];
            if (f > 0) {
                this.oscillators.push({ freq: f, osc: null });
            }
        }
    }

    startPlaying() {
        for (var i in this.oscillators) {
            this.oscillators[i].osc = this.createOsc(this.oscillators[i].freq);
            this.oscillators[i].osc.start();
        }
    }

    stopPlaying() {
        for (var i in this.oscillators) {
            this.oscillators[i].osc.stop();
        }
    }

    createOsc(freq) {
        var osc = this.context.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.connect(this.context.destination);
        return osc;
    }
}
