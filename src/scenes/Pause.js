class Pause extends Phaser.Scene {
    constructor() {
        super('pause')
    }

    preload() {
        //
    }

    init(data) {
        this.level = data.level;
    }

    create() {
        this.bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x10302A).setOrigin(0).setAlpha(0);

        this.box = this.add.rectangle(game.config.width/2, game.config.height/2 - 50, 250, 100, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(4, 0x10302A).setAlpha(0);
        this.text = this.add.text(game.config.width/2, game.config.height/2 - 50, "PAUSED", { color: '#10302A', fontSize: '60px', fontFamily: 'Pangolin'}).setOrigin(0.5).setAlpha(0);

        this.continue = new Button(this, game.config.width/2, game.config.height/2 + 60, 150, 50, 0xCCF0E4, 4, 0x10302A, 'text', 'RESUME', () => {
            this.tweens.add({
                targets: [this.bg, this.box, this.text, this.continue, this.continue.label, this.instructions, this.instructions.label, this.exit, this.exit.label],
                alpha: 0,
                duration: 100,
                onComplete: () => {
                    this.scene.resume(this.level);
                    this.scene.stop();
                }
            });
            
        }).setAlpha(0);
        this.continue.label.setAlpha(0);

        this.instructions = new Button(this, game.config.width/2, game.config.height/2 + 125, 150, 50, 0xCCF0E4, 4, 0x10302A, 'text', 'HOW TO PLAY', () => { 
            this.scene.launch('howToPlay', {level: 'pause'});
            this.scene.setVisible(true, 'howToPlay');
            this.scene.bringToTop('howToPlay');
            this.scene.pause('pause');
        }).setAlpha(0);
        this.instructions.label.setAlpha(0);

        this.exit = new Button(this, game.config.width/2, game.config.height/2 + 190, 150, 50, 0xffbffb, 4, 0x61305f, 'text', 'MAIN MENU', () => { 
            this.scene.stop(this.level);
            this.scene.stop();
            this.scene.start('mainMenu');
        }).setAlpha(0);
        this.exit.label.setAlpha(0);

        this.tweens.add({
            targets: [this.bg],
            alpha: 0.5,
            duration: 100,
        });

        this.tweens.add({
            targets: [this.box, this.text, this.continue, this.continue.label, this.instructions, this.instructions.label, this.exit, this.exit.label],
            alpha: 1,
            duration: 100,
        });


    }
}