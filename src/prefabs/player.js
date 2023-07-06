class Player extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'george');
        this.setScale(0.5);
        this.aim = new PlayerAim(scene, x, y).setScale(0.5);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.isAlive = true;
        this.isInvincible = false;
        this.health = 3;

        this.projectiles = new Phaser.GameObjects.Group;
        this.isShooting = false
        this.score = 0;
        

        scene.input.on('pointerdown', () => {
            scene.input.mouse.disableContextMenu();

            if(this.isAlive) {

            if (scene.input.activePointer.leftButtonDown()) {
                if (!this.isShooting) {
                    this.shoot(scene);
                }
            }
            
            if(scene.input.activePointer.middleButtonDown()) {
                console.log('middle')
            }
            
            if(scene.input.activePointer.rightButtonDown()) {
                console.log('right')
            }
        }})
    }

    update() {
        this.aim.update();
        this.aim.x = this.x;
        this.aim.y = this.y;

        this.body.setVelocityX(0);
        this.body.setGravityY(gravity);
        this.isFloating = false;

        this.keyW.on('down', () => {
            if (this.body.touching.down) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

        this.keySPACE.on('down', () => {
            if (this.body.touching.down) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

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
            this.body.setGravityY(gravity * fastfallMultiplier);
        }

        if (this.keyD.isDown && this.x <= game.config.width - this.body.width/2) {
            if (!this.isFloating) {
                this.body.setVelocityX(moveSpeed);
            } else {
                this.body.setVelocityX(moveSpeed * floatMultiplierX)
            }
        }

        this.projectiles.children.entries.forEach(projectile => {
            if (projectile.x > game.config.width + projectile.body.width ||
                projectile.x < projectile.body.width * -1 ||
                projectile.y > game.config.height + projectile.body.height ||
                projectile.y < projectile.body.height * -1) {
                
                projectile.destroy();
            }
        })

    }

    damage(player, enemy) {
        if (!player.isInvincible) {
            player.isInvincible = true;
            player.health--;

            if (player.health == 0) {
                player.isAlive = false;
                player.body.destroy();
                let gameOverText = this.add.text(game.config.width/2, game.config.height/2, "GAME OVER", { color: '#000000', fontSize: '48px'}).setOrigin(0.5).setAlpha(0);
                this.time.delayedCall(50, () => {
                    this.tweens.add({
                        targets: [gameOverText],
                        alpha: 1,
                        duration: 500
                    })
                    this.tweens.add({
                        targets: [player, player.aim],
                        alpha: 0,
                        duration: 500,
                        onComplete: () => {
                            player.destroy();
                            this.scene.restart();  
                        }
                    });
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
                        player.isInvincible = false;
                        player.setAlpha(1);
                        player.aim.setAlpha(1);
                    }    
                });
            }            
        }
    }

    shoot(scene) {
        this.isShooting = true;
        let velocity = scene.physics.velocityFromAngle(this.aim.angle, 1);
        this.projectiles.add(new Projectile(scene, this.x, this.y, 
                                            'projectile', velocity, 
                                            this.body.width, this.body.height, 
                                            this.aim.angle, projectileSpeed).setScale(0.0625));
        scene.time.delayedCall(fireRate, () => {
            if (scene.input.activePointer.leftButtonDown()) {
                this.shoot(scene);
            } else {
                this.isShooting = false;
            }
        })
    }
}