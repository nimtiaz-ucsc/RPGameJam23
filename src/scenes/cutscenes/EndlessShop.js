class EndlessShop extends Phaser.Scene {

    constructor() {
        super('endlessShop');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [ 
            {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'May I interest you in one of these priceless artifacts?',
                choice1: {
                    img: 'artifact_health',
                    callback: () => {
                        healthBuff++;
                    }
                },
                choice2: {
                    img: 'artifact_speed',
                    callback: () => {
                        speedBuff *= 0.9;
                        enemySpeedBuff *= 1.1;
                    }
                }
            }, {
                end: true
            }
        ]

        if (endlessLevel % 3 == 0) {
            this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky1').setOrigin(0);
            this.sun = this.add.sprite(56, 0, 'sun').setOrigin(0).play('sun_anim');
        } else if (endlessLevel % 3 == 1) {
            this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky2').setOrigin(0);
            this.sun = this.add.sprite(56, 0, 'sunset').setOrigin(0).play('sunset_anim');
        } else if (endlessLevel % 3 == 2) {
            this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky3').setOrigin(0);
            this.sun = this.add.sprite(56, 0, 'moon').setOrigin(0).play('moon_anim');
        }

        this.clouds1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds1').setOrigin(0);
        this.clouds1_sprite = this.add.sprite(0, 0, 'clouds1').setVisible(false).play('clouds1_anim');

        this.clouds2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds2').setOrigin(0);
        this.clouds2_sprite = this.add.sprite(0, 0, 'clouds2').setVisible(false).play('clouds2_anim');

        this.grass1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass1').setOrigin(0);
        this.grass1_sprite = this.add.sprite(0, 0, 'grass1').setVisible(false).play('grass1_anim');

        this.grass2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass2').setOrigin(0);
        this.grass2_sprite = this.add.sprite(0, 0, 'grass2').setVisible(false).play('grass2_anim');

        this.dirt = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'dirt').setOrigin(0);
        this.dirt_sprite = this.add.sprite(0, 0, 'dirt').setVisible(false).play('dirt_anim');

        this.dialog = new Dialog(this, game.config.width/2, game.config.height * 0.8, undefined, this.sequence);

        new Button(this, 60, 50, 90, 50, 0xffbffb, 6, 0x61305f, 'text', 'SKIP >>', () => { 
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { 
                    endlessLevel++;
                    this.scene.start('endless');
                }
            });
        });

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0).setDepth(1);
    }

    update() {
        this.clouds1.setFrame(this.clouds1_sprite.frame.name);
        this.clouds2.setFrame(this.clouds2_sprite.frame.name);
        this.grass1.setFrame(this.grass1_sprite.frame.name);
        this.grass2.setFrame(this.grass2_sprite.frame.name);
        this.dirt.setFrame(this.dirt_sprite.frame.name);

        this.clouds2.tilePositionX += bgSpeed/5;
        this.clouds1.tilePositionX += bgSpeed/10;

        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { 
                    endlessLevel++;
                    this.scene.start('endless'); 
                }
            });
            
        }
    }
}