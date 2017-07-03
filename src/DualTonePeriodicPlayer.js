import DualTonePlayer from './DualTonePlayer';

export default class DualTonePeriodicPlayer extends DualTonePlayer {

    constructor(context, freq1, freq2, duration, space, name) {
        super(context, freq1, freq2, name);

        this.active_playing = false;
        this.play_state = false;
        this.duration = duration;
        this.space = space;
        this.timeout = null;
    }

    startPlaying() {
        this.active_playing = true;
        this.run();
    }

    stopPlaying() {
        this.active_playing = false;
        this.run();
    }

    run() {
        if (this.active_playing) {
            this.play_state = !this.play_state;

            if (this.play_state) {
                super.startPlaying();
                this.timeout = setTimeout(this.run.bind(this), this.duration);
            } else {
                super.stopPlaying();
                this.timeout = setTimeout(this.run.bind(this), this.space);
            }
        } else {
            clearTimeout(this.timeout);
            super.stopPlaying();
            return;
        }
    }
}