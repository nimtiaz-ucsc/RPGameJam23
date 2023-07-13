class DialogTest extends Phaser.Scene {
    constructor() {
        super('dialogTest')
    }

    preload() {
        //
    }

    create() {
        this.complete = false;

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
                speaker: null,
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
                speaker: null,
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
    
    update() {
        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0);
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('prefabTest'); }
            });
            
        }
    }

}