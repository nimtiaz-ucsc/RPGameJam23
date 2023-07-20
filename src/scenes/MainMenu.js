class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenu');
    }

    preload() {
        //
    }

    create() {
        healthBuff = 0;
        speedBuff = 1;
        totalScore = 0;

        this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky3').setOrigin(0);
        this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass1').setOrigin(0);

        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky3').setOrigin(0);

        this.grass1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass1').setOrigin(0);
        this.grass1_sprite = this.add.sprite(0, 0, 'grass1').setVisible(false).play('grass1_anim');

        this.grass2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass2').setOrigin(0);
        this.grass2_sprite = this.add.sprite(0, 0, 'grass2').setVisible(false).play('grass2_anim');

        this.dirt = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'dirt').setOrigin(0);
        this.dirt_sprite = this.add.sprite(0, 0, 'dirt').setVisible(false).play('dirt_anim');
        
        this.add.text(50, 40, 'BIG GEORGE AND COMPANY IN...', { color: '#CCF0E4', fontSize: '24px', fontFamily: 'Pangolin'}).setOrigin(0);
        this.add.text(50, 75, 'QUEST FOR THE FOURTH FRIEND', { color: '#CCF0E4', fontSize: '60px', fontFamily: 'Pangolin'}).setOrigin(0);
        this.add.text(50, 150, 'A GAME BY ARIVERINEGYPT', { color: '#CCF0E4', fontSize: '24px', fontFamily: 'Pangolin'}).setOrigin(0);

        this.chuck = this.add.sprite(25, game.config.height - 50, 'title_chuck').setOrigin(0, 1).setScale(0.6);
        this.sam = this.add.sprite(25, game.config.height - 50, 'title_sam').setOrigin(0, 1).setScale(0.6);
        this.bob = this.add.sprite(25, game.config.height - 50, 'title_bob').setOrigin(0, 1).setScale(0.6);
        this.george = this.add.sprite(25, game.config.height - 50, 'title_george').setOrigin(0, 1).setScale(0.6);

        this.tweens.add ({
            targets: [this.chuck],
            y: this.chuck.y - 10,
            duration: 2000,
            loop: -1,
            yoyo: true,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add ({
            targets: [this.sam],
            y: this.sam.y + 10,
            duration: 2500,
            loop: -1,
            yoyo: true,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add ({
            targets: [this.bob],
            y: this.bob.y - 5,
            duration: 2250,
            loop: -1,
            yoyo: true,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add ({
            targets: [this.george],
            y: this.george.y + 5,
            duration: 2750,
            loop: -1,
            yoyo: true,
            ease: 'Sine.easeInOut'
        });


        new Button(this, 4 * game.config.width/5, 5 * game.config.height/6, 300, 100, 0xCCF0E4, 6, 0x10302A, 'text', 'START GAME', () => { 
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('scene1'); }
            }); 
        });

        new Button(this, 4 * game.config.width/5 + 25, 4 * game.config.height/6, 250, 75, 0xCCF0E4, 6, 0x10302A, 'text', 'HOW TO PLAY (TBA)', null);
        new Button(this, 4 * game.config.width/5 + 25, 3 * game.config.height/6 + 15, 250, 75, 0xCCF0E4, 6, 0x10302A, 'text', 'ENDLESS MODE (TBA)', null);
        new Button(this, 4 * game.config.width/5 + 25, 2 * game.config.height/6 + 30, 250, 75, 0xCCF0E4, 6, 0x10302A, 'text', 'CREDITS (TBA)', null);

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0).setDepth(1);
    }

    update() {
        this.grass1.setFrame(this.grass1_sprite.frame.name);
        this.grass2.setFrame(this.grass2_sprite.frame.name);
        this.dirt.setFrame(this.dirt_sprite.frame.name);
    }




}