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
                speech: 'Hi, my name is George. BIG George.'
            },
            {
                frame: 'sky',
                speaker: 'Big George',
                speech: 'Now check this out!\n:)'
            },
            {
                speaker: 'Decision Point Time!!!',
                speech: 'Make a choice...',
                choice1: {
                    img: 'portrait_bob',
                    callback: () => {
                        this.dialog.index = 6;
                    }
                },
                choice2: {
                    img: 'portrait_chuck',
                    callback: () => {
                        this.dialog.index = 5;
                    }
                },
                choice3: {
                    img: 'portrait_sam',
                    callback: () => {
                        this.dialog.index = 4;
                    }
                }
            },
            {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Yup. Still George.'
            },
            {
                speech: '~ A Brief Intermission ~'
            },
            {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'They call me Lanky Sam.',
                next: 10
            },
            {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Buff Chuck reporting in.',
                next: 10
            },
            {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'And last but not least, Tiny Bob! Hooray!'
            },
            {
                speech: '...'
            },
            {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'You can go now.'
            },
            {
                end: true
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