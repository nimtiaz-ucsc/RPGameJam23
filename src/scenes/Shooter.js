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
        this.projectileSpawn = this.physics.add.sprite(128, game.config.height-128, 'projectile').setScale(0.25).setOrigin(-2, 0.5);

        this.projectiles = this.physics.add.group();

        this.projectileSpeed = 1000;
        
    }

    update() {
        this.aimAngle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.aim.x, this.aim.y, this.input.activePointer.x, this.input.activePointer.y);
        this.aim.setAngle(this.aimAngle);
        this.projectileSpawn.setAngle(this.aimAngle);
    }

    fireProjectile() {
        this.isFiring = true;
        let projectile = this.physics.add.sprite(this.projectileSpawn.x, this.projectileSpawn.y, 'projectile').setAngle(this.aimAngle).setScale(0.25);
        let velocity = this.physics.velocityFromAngle(this.aimAngle, this.projectileSpeed);
        projectile.setVelocityX(velocity.x);
        projectile.setVelocityY(velocity.y);
        //this.projectiles.add(projectile);

        this.time.delayedCall(500, () => {
            if (this.input.activePointer.leftButtonDown()) {
                this.fireProjectile();
            } else {
                this.isFiring = false;
            }
        });
    }


}