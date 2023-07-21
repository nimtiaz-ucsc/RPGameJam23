class Player extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'george_sprite');
        this.aim = new PlayerAim(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.setSize(64, 128);

        this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.isAlive = true;
        this.isInvincible = false;
        this.health = 5 + healthBuff;

        this.projectiles = new Phaser.GameObjects.Group;
        this.isShooting = false
        this.score = totalScore;
        

        scene.input.on('pointerdown', () => {
            scene.input.mouse.disableContextMenu();

            if(this.isAlive) {

            if (scene.input.activePointer.leftButtonDown()) {
                if (!this.isShooting) {
                    this.shoot(scene);
                }
            }
        }})
    }

    update() {
        this.aim.x = this.x;
        this.aim.y = this.y;

        this.body.setVelocityX(0);
        this.body.setGravityY(gravity);
        this.isFloating = false;
        this.isFastfalling = false;


        this.keyW.on('down', () => {
            if (this.body.touching.down && this.body.velocity.y == 0 && this.isAlive) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

        this.keySPACE.on('down', () => {
            if (this.body.touching.down && this.body.velocity.y == 0 && this.isAlive) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

        if (this.isAlive) {
            this.aim.update();
            
            if ((this.keyW.isDown || this.keySPACE.isDown) && this.body.velocity.y > 0) {
                this.isFloating = true;
                this.body.setGravityY(gravity * floatMultiplierY);
            }

            if (this.keyA.isDown && this.x >= this.body.width/2) {
                if (!this.isFloating) {
                    this.body.setVelocityX(moveSpeed * -1);
                } else {
                    this.body.setVelocityX(moveSpeed * -1 * floatMultiplierX);
                }
            }

            if (this.keyS.isDown) {
                this.isFastfalling = true;
                this.body.setGravityY(gravity * fastfallMultiplier);
            }

            if (this.keyD.isDown && this.x <= game.config.width - this.body.width/2) {
                if (!this.isFloating) {
                    this.body.setVelocityX(moveSpeed);
                } else {
                    this.body.setVelocityX(moveSpeed * floatMultiplierX)
                }
            }
        }

        if (this.body.touching.down && this.body.velocity.y == 0) {
            this.playAnim('georgeRun');
        } else if (this.body.velocity.y < 0) {
            this.playAnim('georgeRise')
        } else if (this.isFloating && !this.isFastfalling) {
            this.playAnim('georgeFloat');
        } else if (this.body.velocity.y > 0) {
            this.playAnim('georgeFall')
        }

        this.projectiles.children.entries.forEach(projectile => {
            projectile.update();
        })

    }

    damage(player, enemy) {
        if (!player.isInvincible) {
            player.isInvincible = true;
            player.health--;

            this.portrait.setTexture('portrait_george_sad')

            if (player.health == 0) {
                this.complete = true;
                player.isAlive = false;
                player.isInvincible = true;
                this.tweens.add({
                    targets: [player, player.aim],
                    alpha: 0,
                    duration: 500
                });
                let gameOverBg = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x10302A).setOrigin(0).setAlpha(0).setDepth(1);
                let gameOverBox = this.add.rectangle(game.config.width/2, game.config.height/2, 400, 200, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(4, 0x10302A).setAlpha(0).setDepth(1);
                let gameOverText = this.add.text(game.config.width/2, game.config.height/2 - 25, "GAME OVER", { color: '#10302A', fontSize: '48px', fontFamily: 'Pangolin'}).setOrigin(0.5).setAlpha(0).setDepth(1);
                let encourageText = this.add.text(game.config.width/2, game.config.height/2 + 50, "But that's okay!", { color: '#10302A', fontSize: '24px', fontFamily: 'Pangolin', align: 'center'}).setOrigin(0.5).setAlpha(0).setDepth(1);
                this.time.delayedCall(500, () => {
                    this.tweens.add({
                        targets: [gameOverBg],
                        alpha: 0.5,
                        duration: 100,
                    });
                    this.tweens.add({
                        targets: [gameOverBox, gameOverText],
                        alpha: 1,
                        duration: 500,
                        onComplete: () => {
                            this.time.delayedCall(1000, () => {
                                encourageText.setAlpha(1);
                                this.time.delayedCall(1000, () => {
                                    if (this.scene.key == 'endless') {
                                        encourageText.setText('But that\'s okay! Try again!\nFinal score: ' + (totalScore + player.score));
                                        encourageText.y -= 10;
                                    } else {
                                        encourageText.setText('But that\'s okay! Try again!')
                                    }
                                    new Button(this, game.config.width/2, 3 * game.config.height/4 - 25, 150, 50, 0xCCF0E4, 4, 0x10302A, 'text', 'RESTART', () => {
                                        if (this.scene.key == 'endless') {
                                            healthBuff = 0;
                                            speedBuff = 1;
                                            enemySpeedBuff = 1;
                                            totalScore = 0;
                                            endlessLevel = 0;
                                        }
                                        this.scene.restart() 
                                    });
                                    new Button(this, game.config.width/2, 3 * game.config.height/4 + 50, 150, 50, 0xCCF0E4, 4, 0x10302A, 'text', 'MAIN MENU', () => { this.scene.start('mainMenu') });
                                })
                            })
                        }
                    })
                });

            } else {
                this.tweens.add({
                    targets:[player, player.aim],
                    alpha: 0,
                    duration: iframeTime,
                    loop: invincibleTime/iframeTime,
                    yoyo: true,
                    ease: 'Sine.easeInOut',
                    onComplete: () => {
                        this.portrait.setTexture('portrait_george')
                        if (player.isAlive) { player.isInvincible = false; }
                        player.setAlpha(1);
                        player.aim.setAlpha(1);
                    }    
                });
            }

            if (enemy.constructor.name === "Projectile") {
                enemy.body.destroy();
                enemy.setAlpha(0);
                let explosion = this.add.sprite(enemy.x, enemy.y, 'explosion_enemy').setOrigin(0.5).play('explode_enemy');
                explosion.on('animationcomplete', () => {
                    enemy.destroy();
                    explosion.destroy();
                });
            }
        }
    }

    shoot(scene) {
        this.isShooting = true;
        let velocity = scene.physics.velocityFromAngle(this.aim.angle, 1);
        this.projectiles.add(new Projectile(scene, this.x, this.y, 
                                            'projectile_' + ally, velocity, 
                                            this.body.width, this.body.height, 
                                            this.aim.angle, projectileSpeed * speedBuff));
        scene.time.delayedCall(fireRate * speedBuff, () => {
            if (scene.input.activePointer.leftButtonDown()) {
                this.shoot(scene);
            } else {
                this.isShooting = false;
            }
        });
    }

    playAnim(key) {
        if (this.anims.currentAnim === null) {
            this.anims.play(key);
        } else if (this.anims.currentAnim.key != key) {
            let currentAnim = this.anims.currentAnim.key
            if (key === 'georgeFall') {
                if (currentAnim === 'georgeRise') {
                    this.anims.play('georgeFallTransition');
                    this.on('animationcomplete', () => { this.anims.play(key) })
                } else if (currentAnim === 'georgeFloat') {
                    this.anims.play('georgeFloatFallTransition');
                    this.on('animationcomplete', () => { this.anims.play(key) })
                }
            } else if (key === 'georgeRise') {
                if (currentAnim === 'georgeRun') {
                    this.anims.play('georgeSquat');
                    this.on('animationcomplete', () => { this.anims.play(key) })
                }
            } else if (key === 'georgeFloat') {
                if (currentAnim === 'georgeRise' || currentAnim === 'georgeFall') {
                    this.anims.play('georgeFloatTransition');
                    this.on('animationcomplete', () => { this.anims.play(key) })
                }
            } else if (key === 'georgeRun') {
                if (currentAnim === 'georgeFall' || currentAnim === 'georgeFloat') {
                    this.anims.play('georgeLand');
                    this.on('animationcomplete', () => { this.anims.play(key) })
                }
            } else { this.anims.play(key) }
        }
    }
}