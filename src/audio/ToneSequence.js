import MultiTonePlayer from './MultiTonePlayer';

const SequenceState = {
    MARK: 0,
    SPACE: 1
};

export default class ToneSequence {

    constructor(audio_context, loop) {
        this.audio_context = audio_context;
        this.sequences = [];
        this.timer = null;
        this.loop = loop;
        this.reset();
    }

    /**
     * Adds another node to the tone sequence list
     * @param {*} options 
     */
    addSequenceNode(options) {
        var opt = {
            freqs: options.freqs || [],
            duration: options.duration || 0,
            space: options.space || 0
        };

        opt.osc = new MultiTonePlayer(this.audio_context, opt.freqs);

        this.sequences.push(opt);
    }

    /**
     * Start playing the sequence
     */
    play() {
        switch (this.current_sequence_state) {
            case SequenceState.SPACE:
                this.current_sequence++;
                if (this.current_sequence >= this.sequences.length) {
                    this.current_sequence = 0;
                    if (!this.loop) {
                        this.stop();
                        return;
                    }
                }

                this.sequences[this.current_sequence].osc.startPlaying();
                this.current_sequence_state = SequenceState.MARK;

                this.timer = setTimeout(this.play.bind(this), this.sequences[this.current_sequence].duration);
                break;
            case SequenceState.MARK:
                this.sequences[this.current_sequence].osc.stopPlaying();
                this.current_sequence_state = SequenceState.SPACE;
                this.timer = setTimeout(this.play.bind(this), this.sequences[this.current_sequence].space);
                break;
        }
    }

    /**
     * Stop playing the sequence, clear the callback timer, and reset 
     */
    stop() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        let seq = this.sequences[this.current_sequence];
        if (seq) {
            seq.osc.stopPlaying();
        }
        this.reset();
    }

    /**
     * 
     */
    reset() {
        this.current_sequence = -1;
        this.current_sequence_state = SequenceState.SPACE;
    }
}