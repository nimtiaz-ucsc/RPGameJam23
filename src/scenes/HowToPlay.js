class HowToPlay extends Phaser.Scene {
    constructor() {
        super('howToPlay')
    }

    preload() {
        //
    }

    init(data) {
        this.level = data.level;
    }

    create() {
        this.bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x10302A).setOrigin(0).setAlpha(0);

        this.box = this.add.rectangle(game.config.width/2, game.config.height/2, 1000, 660, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(4, 0x10302A).setAlpha(0);
        this.image = this.add.sprite(game.config.width/2, game.config.height/2 - 10, 'how_to').setOrigin(0.5).setScale(0.9).setAlpha(0).play({key: 'how_to_anim', startFrame: 0});

        this.page1Text1 = this.add.text(80, game.config.height - 200, 'Use [A] and [D] to move forward and backward, both on the ground and in the air.', { color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 300}}).setOrigin(0).setAlpha(0);
        this.page1Text2 = this.add.text(380, game.config.height - 200, 'Press [W] or [SPACE] while on the ground to jump.\n--\nHold the key down while in the air to float and slow your descent.', { color: '#10302A', fontSize: '26px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 400}}).setOrigin(0).setAlpha(0);
        this.page1Text3 = this.add.text(780, game.config.height - 200, 'Hold [S] while in the air to fastfall to the ground.\n--\nHold the key down while jumping to shorthop.', { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 250}}).setOrigin(0).setAlpha(0);

        this.page2Text1 = this.add.text(80, game.config.height - 190, 'Move the mouse to aim Big George\'s arm.\n--\nLeft click to throw a chunk of wool. Hold down to rapid fire.', { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 300}}).setOrigin(0).setAlpha(0);
        this.page2Text2 = this.add.text(400, game.config.height - 190, 'Right click and hold to bring up the friend wheel.\n--\nDrag towards the friend you want to switch to, then release.', { color: '#10302A', fontSize: '26px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 380}}).setOrigin(0).setAlpha(0);
        this.page2Text3 = this.add.text(780, game.config.height - 175, 'Pay attention to the enemy bug\'s primary color, then switch your friend to match.', { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 250}}).setOrigin(0).setAlpha(0);

        this.continue = this.add.sprite(game.config.width - 75, game.config.height - 60, 'dialog_continue').play('continue_anim');
        this.exit = new Button(this,  50, 40, 50, 50, 0xffbffb, 4, 0x61305f, 'text', 'X', () => {
            this.exiting = true;
            this.tweens.add({
                targets: [this.bg, this.box, this.exit, this.exit.label, this.image, this.page1Text1, this.page1Text2, this.page1Text3, this.page2Text1, this.page2Text2, this.page2Text3, this.continue],
                alpha: 0,
                duration: 100,
                onComplete: () => {
                    if (this.level == 'scene1') {
                        this.scene.start('level1'),
                        this.scene.stop();
                    } else {
                        this.scene.resume(this.level);
                        this.scene.stop();
                    }

                }
            });
            
        }).setAlpha(0);
        this.exit.label.setAlpha(0);

        this.tweens.add({
            targets: [this.bg],
            alpha: 0.5,
            duration: 100,
        });

        this.tweens.add({
            targets: [this.box, this.exit, this.exit.label, this.image, this.page1Text1, this.page1Text2, this.page1Text3, this.continue],
            alpha: 1,
            duration: 100,
        });

        this.page = 0;
        this.exiting = false

        this.sfx_page = this.sound.add('sfx_speech3')

        this.input.on('pointerup', () => {
            this.sfx_page.play({volume: 0.25})
            this.input.mouse.disableContextMenu();
            this.page++;
        });
    }
    
    update() {
        if (!this.exiting) {
            if (this.page % 2 ==  0) {
                this.image.play({key: 'how_to_anim', startFrame: 0});
    
                this.page1Text1.setAlpha(1);
                this.page1Text2.setAlpha(1);
                this.page1Text3.setAlpha(1);
    
                this.page2Text1.setAlpha(0);
                this.page2Text2.setAlpha(0);
                this.page2Text3.setAlpha(0);
            }
            if (this.page % 2 ==  1) {
                this.image.play({key: 'how_to_anim', startFrame: 1});
    
                this.page1Text1.setAlpha(0);
                this.page1Text2.setAlpha(0);
                this.page1Text3.setAlpha(0);
    
                this.page2Text1.setAlpha(1);
                this.page2Text2.setAlpha(1);
                this.page2Text3.setAlpha(1);
            }
        }

    }
}