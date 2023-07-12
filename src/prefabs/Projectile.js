class Projectile extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, texture, velocity, width, height, angle, speed) {
        super(scene, x + velocity.x * width/2, y + velocity.y * height/2, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);


        this.setAngle(angle);
        this.body.setVelocity(velocity.x * speed, velocity.y * speed);
    }

    update() {
        if (this.x > game.config.width + this.body.width ||
            this.x < this.body.width * -1 ||
            this.y > game.config.height + this.body.height ||
            this.y < this.body.height * -1) {
            
            this.destroy();
        }
    }
}