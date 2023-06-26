class Shooter extends Phaser.Scene {
    constructor() {
        super('shooter');
    }

    preload() {
        //
    }

    create() {
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.isFiring = false;

        this.input.on('pointerdown', () => {
            this.input.mouse.disableContextMenu();

            if (this.input.activePointer.leftButtonDown() && !this.isFiring) {
                this.fireProjectile();
            }

            if (this.input.activePointer.middleButtonDown()) {
                console.log('middle');
            }

            if (this.input.activePointer.rightButtonDown()) {
                console.log('right');
            }
        });

        this.aim = this.physics.add.sprite(128, game.config.height/2, 'aim').setGravityY(gravity).setScale(0.5);
        this.player = this.physics.add.sprite(128, game.config.height/2, 'george').setGravityY(gravity).setScale(0.5);
        this.projectileSpawn = this.physics.add.sprite(128, game.config.height/2, 'projectile').setGravityY(gravity).setScale(0.5).setVisible(false);
        
        this.projectiles = this.physics.add.group();

        this.ground = this.add.rectangle(0, game.config.height, game.config.width, 64, 0xAAAAAA).setOrigin(0, 1);

        this.physics.add.existing(this.ground, true);

        this.physics.add.collider(this.aim, this.ground);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.projectileSpawn, this.ground);

        this.enemies = this.physics.add.group();
        this.physics.add.overlap(this.projectiles, this.enemies, this.destroyEnemy);

        this.spawnEnemies();
        
    }

    update() {
        this.aim.setVelocityX(0);
        this.player.setVelocityX(0);
        this.projectileSpawn.setVelocityX(0);

        this.aim.setGravityY(gravity);
        this.player.setGravityY(gravity);
        this.projectileSpawn.setGravityY(gravity);

        keyW.on('down', () => {
            if (this.player.body.touching.down) {
                this.aim.setVelocityY(jumpSpeed);
                this.player.setVelocityY(jumpSpeed);
                this.projectileSpawn.setVelocityY(jumpSpeed);
            }
        });

        keySPACE.on('down', () => {
            if (this.player.body.touching.down) {
                this.aim.setVelocityY(jumpSpeed);
                this.player.setVelocityY(jumpSpeed);
                this.projectileSpawn.setVelocityY(jumpSpeed);
            }
        });

        if ((keyW.isDown || keySPACE.isDown) && this.player.body.velocity.y > 0) {
            this.aim.setGravityY(gravity * 0.1);
            this.player.setGravityY(gravity * 0.1);
            this.projectileSpawn.setGravityY(gravity * 0.1);
        }

        if (keyA.isDown && this.player.x >= 64) {
            this.aim.setVelocityX(moveSpeed * -1);
            this.player.setVelocityX(moveSpeed * -1);
            this.projectileSpawn.setVelocityX(moveSpeed * -1);
        }

        if (keyS.isDown) {
            this.aim.setGravityY(gravity * 3);
            this.player.setGravityY(gravity * 3);
            this.projectileSpawn.setGravityY(gravity * 3);
        }

        if (keyD.isDown && this.player.x <= game.config.width-64) {
            this.aim.setVelocityX(moveSpeed);
            this.player.setVelocityX(moveSpeed);
            this.projectileSpawn.setVelocityX(moveSpeed);
        }

        this.aimAngle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.aim.x, this.aim.y, this.input.activePointer.x, this.input.activePointer.y);
        if (this.aimAngle >= -90 && this.aimAngle < 90) {
            this.player.flipX = false;
        } else if (this.aimAngle < -90 || this.aimAngle >= 90) {
            this.player.flipX = true;
        }
        this.aim.setAngle(this.aimAngle);
        this.projectileSpawn.setAngle(this.aimAngle);

        this.projectiles.children.entries.forEach(projectile => {
            if (projectile.x > game.config.width + projectile.width) {
                projectile.destroy();
            }

            if (projectile.y < 0 - projectile.width) {
                projectile.destroy();
            }
        });

    }

    fireProjectile() {
        this.isFiring = true;
        let velocity = this.physics.velocityFromAngle(this.aimAngle, 1);

        this.projectiles.create(this.projectileSpawn.x + velocity.x * 64, 
                                this.projectileSpawn.y + velocity.y * 64, 'projectile')
                                .setAngle(this.aimAngle).setScale(0.0625)
                                .setVelocity(velocity.x * projectileSpeed, velocity.y * projectileSpeed);

        this.time.delayedCall(fireRate, () => {
            if (this.input.activePointer.leftButtonDown()) {
                this.fireProjectile();
            } else {
                this.isFiring = false;
            }
        });
    }

    spawnEnemies() {
        console.log('spawn')
        let spawnChance = Phaser.Math.Between(1, 10);
        if (spawnChance == 1) {
            console.log('enemy');
            let spawnHeight = Phaser.Math.Between(1, 3) * game.config.height / 4;
            let enemy = this.enemies.add(this.physics.add.sprite(game.config.width, spawnHeight, 'projectile').setScale(0.25));
            enemy.flipX = true;
            enemy.setVelocityX(moveSpeed * -0.5);
        }
        this.time.delayedCall(spawnRate, () => {
            this.spawnEnemies();
        });
    }

    destroyEnemy(projectile, enemy) {
        projectile.destroy();
        enemy.destroy();        
    }
}