class Switcher extends Phaser.Scene {
    constructor() {
        super('switcher');
    }

    preload() {
        //
    }

    create() {
        this.switcher_bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0xB5A28A).setOrigin(0).setAlpha(0);

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
        } else if (this.input.y > this.switcher.y + 35) {
            this.switcher.play('switcher_bob');
        } else if (this.input.x > this.switcher.x + 35 && this.input.y < this.switcher.y + 35) {
            this.switcher.play('switcher_chuck');
        } else if (this.input.x < this.switcher.x - 35 && this.input.y < this.switcher.y + 35) {
            this.switcher.play('switcher_sam');
        }

    }
}