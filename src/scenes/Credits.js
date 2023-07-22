class Credits extends Phaser.Scene {
    constructor() {
        super('credits')
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

        this.text1 = this.add.text(game.config.width/2, game.config.height/2, 'Design, Programming, Narrative, Art, SFX:\nARiverInEgypt\n\n--\n\nDeveloped in Phaser 3\n\nAll art assets created in Pixel Studio\n\nAll SFX created in Bfxr\n\n--\n\nSubmission to Robot Party Jam 2023\nBased on concepts by Kyle Bosman and chat', { color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 1000}}).setOrigin(0.5).setAlpha(0);
        this.text2 = this.add.text(game.config.width/2, game.config.height/2, 'Music Credits\n\n--\n\n"8-Bit Dream Land"\nby moodmode (pixabay.com)\n\n"8-Bit Arcade"\nby moodmode (pixabay.com)\n\n"Bit Shift"\nby Kevin Macleod (incompetech.com)\n\n--\n\nAll royalty-free music licensed under Creative Commons', { color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 1000}}).setOrigin(0.5).setAlpha(0);


        this.continue = this.add.sprite(game.config.width - 75, game.config.height - 60, 'dialog_continue').play('continue_anim');
        this.exit = new Button(this,  50, 40, 50, 50, 0xffbffb, 4, 0x61305f, 'text', 'X', () => {
            this.exiting = true;
            this.tweens.add({
                targets: [this.bg, this.box, this.exit, this.exit.label, this.text1, this.text2, this.continue],
                alpha: 0,
                duration: 100,
                onComplete: () => {
                    if (this.level == 'theEnd') {
                        this.scene.start('epilogue'),
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
            targets: [this.box, this.exit, this.exit.label, this.text1, this.continue],
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
                this.text1.setAlpha(1);
                this.text2.setAlpha(0);
            }
            if (this.page % 2 ==  1) {
                this.text1.setAlpha(0);
                this.text2.setAlpha(1);
            }
        }

    }
}