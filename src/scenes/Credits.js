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

        this.text = this.add.text(game.config.width/2, game.config.height/2, 'Design, Programming, Narrative, Art, SFX:\nARiverInEgypt\n\n--\n\nDeveloped in Phaser 3\n\nAll art assets created in Pixel Studio\n\nAll SFX created in Bfxr\n\nNo music because DMCA is scary\n\n--\n\nSubmission to Robot Party Jam 2023\nBased on concepts by Kyle Bosman and chat', { color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin', align: 'center', wordWrap: {width: 1000}}).setOrigin(0.5).setAlpha(0);

        this.exit = new Button(this,  50, 40, 50, 50, 0xffbffb, 4, 0x61305f, 'text', 'X', () => {
            this.exiting = true;
            this.tweens.add({
                targets: [this.bg, this.box, this.text],
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
            targets: [this.box, this.exit, this.exit.label, this.text],
            alpha: 1,
            duration: 100,
        });
    }
    
    update() {
    }
}