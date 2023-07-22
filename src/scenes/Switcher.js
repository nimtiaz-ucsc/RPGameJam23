class Switcher extends Phaser.Scene {
    constructor() {
        super('switcher');
    }

    preload() {
        //
    }

    init(data) {
        this.level = data.level;
    }

    create() {
        this.switcher_bg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0xede6c4).setOrigin(0).setAlpha(0);
        this.switcher = this.add.sprite(this.input.x, this.input.y, 'switcher').setScale(0);

        this.position = 0

        this.sfx_george = this.sound.add('sfx_switch_george');
        this.sfx_bob = this.sound.add('sfx_switch_bob');
        this.sfx_chuck = this.sound.add('sfx_switch_chuck');
        this.sfx_sam = this.sound.add('sfx_switch_sam');
        this.sfx_confirm = this.sound.add('sfx_switch_confirm');

        this.sfx_george.play();
        
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
            
            this.scene.resume(this.level);
            this.sfx_confirm.play();
            this.time.delayedCall(100, () => {
                this.scene.stop();
            })
            
        })
    }

    update() {        
        if (this.input.activePointer.rightButtonDown()) {  
            if (Math.abs(this.input.x - this.switcher.x) <= 35 && Math.abs(this.input.y - this.switcher.y) <= 35) {
                this.switcher.play({key: 'switch', startFrame: 0});
                this.switcher_bg.fillColor = 0xede6c4;
                if (this.position != 0) {
                    this.sfx_george.play()
                }
                this.position = 0;

            } else if (this.input.y > this.switcher.y + 35) {
                this.switcher.play({key: 'switch', startFrame: 3});
                this.switcher_bg.fillColor = 0xff8552;
                if (this.position != 1) {
                    this.sfx_bob.play()
                }
                this.position = 1;
                ally = 'bob';

            } else if (this.input.x > this.switcher.x + 35 && this.input.y < this.switcher.y + 35) {
                this.switcher.play({key: 'switch', startFrame: 2});
                this.switcher_bg.fillColor = 0x484349
                if (this.position != 2) {
                    this.sfx_chuck.play()
                }
                this.position = 2;
                ally = 'chuck';

            } else if (this.input.x < this.switcher.x - 35 && this.input.y < this.switcher.y + 35) {
                this.switcher.play({key: 'switch', startFrame: 1});
                this.switcher_bg.fillColor = 0x6adb65
                if (this.position != 3) {
                    this.sfx_sam.play()
                }
                this.position = 3;
                ally = 'sam';

            }
        }
    }
}