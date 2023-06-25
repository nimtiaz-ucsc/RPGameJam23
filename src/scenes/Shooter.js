class Shooter extends Phaser.Scene {
    constructor() {
        super('shooter');
    }

    preload() {
        //
    }

    create() {
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

        this.aim = this.physics.add.sprite(128, game.config.height-128, 'aim');
        this.player = this.physics.add.sprite(128, game.config.height-128, 'george');
        this.projectileSpawn = this.physics.add.sprite(128, game.config.height-128, 'projectile').setScale(0.125).setOrigin(-4, 0.5).setVisible(false);

        this.projectiles = this.physics.add.group();

        this.projectileSpeed = 1000;
        this.fireRate = 500;
        
    }

    update() {
        this.aimAngle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.aim.x, this.aim.y, this.input.activePointer.x, this.input.activePointer.y);
        if (this.aimAngle < -90) {
            this.aimAngle = -90;
        } else if (this.aimAngle > 0) {
            this.aimAngle = 0;
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

        this.projectiles.create(this.projectileSpawn.x + velocity.x * 128, 
                                this.projectileSpawn.y + velocity.y * 128, 'projectile')
                                .setAngle(this.aimAngle).setScale(0.125)
                                .setVelocity(velocity.x * this.projectileSpeed, velocity.y * this.projectileSpeed);

        this.time.delayedCall(this.fireRate, () => {
            if (this.input.activePointer.leftButtonDown()) {
                this.fireProjectile();
            } else {
                this.isFiring = false;
            }
        });
    }


}