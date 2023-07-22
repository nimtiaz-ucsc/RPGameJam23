class Level3 extends Phaser.Scene {
    constructor() {
        super('level3')
    }

    preload() {
        //
    }

    create() {
        this.game.sound.stopAll();

        this.bgm = this.sound.add('bgm_level').setLoop(true);
        this.bgm.play({volume: 0.25})
        
        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky3').setOrigin(0);
        this.moon = this.add.sprite(56, 0, 'moon').setOrigin(0).play('moon_anim');

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


        this.ground = this.add.rectangle(0, game.config.height, game.config.width, 32, 0x733e39).setOrigin(0, 1).setVisible(false);
        this.physics.add.existing(this.ground, true);
        
        this.friend = this.add.sprite(128, game.config.height - 50, 'friend_' + ally).setOrigin(0.5, 1).play('friend_' + ally + '_anim').setScale(0.75);
        this.friendSwitch = this.add.sprite(this.friend.x, this.friend.y, 'friend_switch').setOrigin(0.5, 1).setVisible(false).setScale(0.75);
        
        this.player = new Player(this, game.config.width/8, game.config.height - 96);

        this.physics.add.collider([this.player, this.player.aim], this.ground);
        
        this.add.rectangle(-5, -5, 250, 109, 0xCCF0E4).setOrigin(0).setStrokeStyle(4, 0x10302A);
        this.healthText = this.add.text(100, 30, "", { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin'}).setOrigin(0);
        this.currHealth = this.player.health;
        this.setHealthText();

        let size = this.healthText.style.fontSize;
        let newSize = Number(size.slice(0, size.length - 2));
        while (this.healthText.width > 135) {
            this.healthText.setFontSize(--newSize);
        }

        this.scoreText = this.add.text(100, 65, this.player.score + " pts", { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin'}).setOrigin(0);
        this.portrait = this.add.sprite(0, 0, 'portrait_george').setOrigin(0).setScale(0.4);

        this.progressBar = this.add.rectangle(game.config.width/2, 50, game.config.width * 0.5, 10, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(4, 0x10302A);
        this.progress = this.add.rectangle(this.progressBar.x - game.config.width * 0.25, 50, 0, 10, 0x2A8261).setOrigin(0.5).setStrokeStyle(4, 0x10302A);
        this.progressSprite = this.add.sprite(this.progressBar.x - game.config.width * 0.25, 25, 'dialog_continue').play('continue_anim');

        new Button(this, game.config.width - 50, 50, 50, 50, 0xffbffb, 4, 0x61305f, 'text', 'II', () => {
            this.scene.launch('pause', {level: 'level3'});
            this.scene.setVisible(true, 'pause');
            this.scene.bringToTop('pause');
            this.scene.pause('level3');
        });

        this.sfx_hit = this.sound.add('sfx_hit');
        this.sfx_spawn = this.sound.add('sfx_spawn');
        this.sfx_confirm = this.sound.add('sfx_switch_confirm');

        this.enemies = this.physics.add.group();
        this.enemies.defaults = {};
        this.spawnEnemy();

        this.physics.add.overlap(this.player, this.enemies, this.player.damage, undefined, this);
        this.physics.add.overlap(this.player.projectiles, this.enemies, this.destroyEnemy, undefined, this);

        this.complete = false;

        this.input.on('pointerdown', () => {
            this.input.mouse.disableContextMenu();

            if(!this.complete) {
                if (this.input.activePointer.rightButtonDown()) {
                    this.scene.launch('switcher', {level: 'level3'});
                    this.scene.setVisible(true, 'switcher');
                    this.scene.bringToTop('switcher')
                    this.scene.pause('level3');
                    
                }
            }
        }, this)

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0);
    }

    update() {
        this.player.update();

        if(this.player.isAlive) {
            this.progressSprite.x += bgSpeed/30;
            this.progress.x += bgSpeed/30;
        }
        this.clouds1.setFrame(this.clouds1_sprite.frame.name);
        this.clouds2.setFrame(this.clouds2_sprite.frame.name);
        this.grass1.setFrame(this.grass1_sprite.frame.name);
        this.grass2.setFrame(this.grass2_sprite.frame.name);
        this.dirt.setFrame(this.dirt_sprite.frame.name);

        this.dirt.tilePositionX += bgSpeed;
        this.grass2.tilePositionX += bgSpeed/2;
        this.grass1.tilePositionX += bgSpeed/3;
        this.clouds2.tilePositionX += bgSpeed/5;
        this.clouds1.tilePositionX += bgSpeed/10;
        this.moon.x -= bgSpeed/50;

        this.enemies.children.entries.forEach(enemy => {
            enemy.update();
            this.physics.add.overlap(this.player, enemy.projectiles, this.player.damage, undefined, this);
            if (enemy.x < enemy.body.width * -1) {
                enemy.kill(this);
            }
        })

        if (this.currHealth != this.player.health) { this.setHealthText() };
        this.scoreText.setText(this.player.score + " pts");

        this.black.setDepth(1);

        if (this.progress.x >= this.progressBar.width + game.config.width * 0.25 && !this.complete) {
            this.complete = true;
            this.player.isAlive = false;
            this.player.isInvincible = true;
            totalScore += this.player.score;
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: [this.player],
                x: game.config.width + 128,
                duration: 1000,
                onComplete: () => { this.scene.start('scene4')}
            })
        }

        this.friend.x = this.player.x - 64;
        this.friendSwitch.x = this.friend.x;
        if (this.friend.texture.key.slice(7) != ally) {
            this.friend.setTexture('friend_' + ally).play('friend_' + ally + "_anim")
            this.sfx_confirm.play();
            this.friendSwitch.setVisible(true);
            this.friendSwitch.play('friend_switch_anim');
            this.friendSwitch.on('animationcomplete', () => {
                this.friendSwitch.setVisible(false);
            });
        }        
        
    }

    spawnEnemy() {
        if (Phaser.Math.Between(1, spawnChanceMax) <= spawnChanceMin) {
            this.sfx_spawn.play();

            let enemyType = Phaser.Math.Between(1, 3);
            let spawnHeight;
            if (enemyType == 1 || enemyType == 2) {
                spawnHeight = enemyType * game.config.height / 4;
            } else {
                spawnHeight = game.config.height - 80
            }
            spawnHeight += Phaser.Math.Between(0, 20)

            let enemyWeakness;
            let enemyWeaknessNum = Phaser.Math.Between(1, 3);
            if (enemyWeaknessNum == 1) {
                enemyWeakness = 'bob';
            } else if (enemyWeaknessNum == 2) {
                enemyWeakness = 'chuck'
            } else {
                enemyWeakness = 'sam'
            }
            this.enemies.add(new Enemy(this, game.config.width, spawnHeight, enemyType, enemyWeakness));
        }
        this.time.delayedCall(spawnRate, () => {
            this.spawnEnemy();
        });
    }

    destroyEnemy(projectile, enemy) {
        let projectileAlly = projectile.texture.key.slice(11)
        if (projectileAlly == enemy.weakness) {
            this.sfx_hit.play({volume: 0.75});

            projectile.body.setVelocity(0);
            projectile.body.destroy();
            projectile.setAlpha(0);

            let explosion = this.add.sprite(projectile.x, projectile.y, 'explosion_' + projectileAlly).setOrigin(0.5).play('explode_' + projectileAlly);
            explosion.on('animationcomplete', () => {
                projectile.destroy();
                explosion.destroy();
            });
            
            enemy.health--;
            if (enemy.health == 0) {
                this.player.score += enemy.points;
                enemy.kill(this);
            }
        }
    }

    setHealthText() {
        let healthString = "";

        for (let i = 0; i < this.player.health; i++) {
            healthString += "❤"
        }
        this.currHealth = this.player.health;
        this.healthText.setText(healthString);
    }
}