export default class DualTonePlayer {

    constructor(context, freq1, freq2, name) {
        this.freq1 = freq1;
        this.freq2 = freq2;
        this.freq1osc = null;
        this.freq2osc = null;
        this.name = name;
        this.context = context;
    }

    initAudio() {

    }

    startPlaying() {
        console.info("playing " + this.name);

        this.freq1osc = this.createOsc(this.freq1);
        this.freq2osc = this.createOsc(this.freq2);


        this.freq1osc.start(0);
        this.freq2osc.start(0);
    }

    stopPlaying() {
        console.info("stopping " + this.name);
        if (this.freq1osc) {
            this.freq1osc.stop(0);
            this.freq2osc.stop(0);
        }
    }

    createOsc(freq) {
        var osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(this.context.destination);
        return osc;
    }
}