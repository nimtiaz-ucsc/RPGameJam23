class Enemy extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, texture, type) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.25);
        this.flipX = true;
        this.body.setVelocityX(moveSpeed * -1 / type);

        this.points = basePoints * (4 - type);
        this.health = type

        this.healthText = scene.add.text(x, y - this.body.height/2, this.health, { color: '#000000', fontSize: '24px'}).setOrigin(0.5);
        
    }

    update() {
        this.healthText.x = this.x;
        this.healthText.y = this.y - this.body.height;
        this.healthText.setText(this.health);
        
    }

    kill(scene) {
        this.body.destroy();

        scene.time.delayedCall(50, () => {
            scene.tweens.add({
                targets: [this, this.healthText],
                alpha: 0,
                duration: 500,
                onComplete: () => {
                    this.healthText.destroy();
                    this.destroy();
                }
            })
        }); 
    }

    
}