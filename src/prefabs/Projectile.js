class Projectile extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, texture, velocity, width, height, angle) {
        super(scene, x + velocity.x * width/2, y + velocity.y * height/2, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setAngle(angle);
        this.body.setVelocity(velocity.x * projectileSpeed, velocity.y * projectileSpeed);
    }
}