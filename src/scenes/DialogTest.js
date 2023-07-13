class DialogTest extends Phaser.Scene {
    constructor() {
        super('dialogTest')
    }

    preload() {
        //
    }

    create() {

        this.sequence = [
            {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Hi, my name is George.'
            },

            {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Yup. Still George.'
            },
            {
                portrait: null,
                speaker: '',
                speech: '~ A Brief Intermission ~'
            },
            {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'That was George. And I am Sam. Lanky Sam.'
            },
            {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Buff Chuck reporting in.'
            },
            {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'And last but not least, Tiny Bob! Hooray!'
            },
            {
                portrait: null,
                speaker: '',
                speech: '...'
            },
            {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'You can go now.'
            }
        ];

        this.dialog = new Dialog(this, game.config.width/2, game.config.height * 0.8, undefined, this.sequence);

        
    }

}