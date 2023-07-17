class Switcher extends Phaser.Scene {
    constructor() {
        super('switcher');
    }

    preload() {
        //
    }

    create() {
        this.switcher_bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0xede6c4).setOrigin(0).setAlpha(0);

        this.bob_triangle = new Phaser.Geom.Triangle(this.input.x, this.input.y, this.input.x - game.config.width, this.input.y + game.config.height, this.input.x + game.config.width, this.input.y + game.config.width, 0xFF8552)

        this.switcher = this.add.sprite(this.input.x, this.input.y, 'switcher').setScale(0);
        this.tweens.add({
            targets: [this.switcher],
            scaleX: 1,
            scaleY: 1,
            duration: 100,
            ease: 'Back.easeOut'
        });
        this.tweens.add({
            targets: [this.switcher_bg],
            alpha: 0.5,
            duration: 100,
        });

        this.input.on('pointerup', () => {
            if (!this.input.activePointer.middleButtonDown()) {                
                this.tweens.add({
                    targets: [this.switcher],
                    scaleX: 0,
                    scaleY: 0,
                    duration: 100,
                    ease: 'Back.easeIn'
                });
                this.tweens.add({
                    targets: [this.switcher_bg],
                    alpha: 0,
                    duration: 100
                });
                
                this.scene.resume('level1');
                this.time.delayedCall(100, () => {
                    this.scene.stop();
                })
            }
            
        })
    }

    update() {

        if (Math.abs(this.input.x - this.switcher.x) <= 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
            this.switcher.play('switcher_neutral');
            this.switcher_bg.fillColor = 0xede6c4;
        } else if (this.input.y > this.switcher.y + 35) {
            this.switcher.play('switcher_bob');
            this.switcher_bg.fillColor = 0xff8552;
            ally = 'bob';
        } else if (this.input.x > this.switcher.x + 35 && this.input.y < this.switcher.y + 35) {
            this.switcher.play('switcher_chuck');
            this.switcher_bg.fillColor = 0x484349
            ally = 'chuck';
        } else if (this.input.x < this.switcher.x - 35 && this.input.y < this.switcher.y + 35) {
            this.switcher.play('switcher_sam');
            this.switcher_bg.fillColor = 0x6adb65
            ally = 'sam';
        }

    }
}