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

        this.projectiles = new Phaser.GameObjects.Group;
        if (type != 3) { this.shoot(scene, type); }
        
        
    }

    update() {
        this.healthText.x = this.x;
        this.healthText.y = this.y - this.body.height;
        this.healthText.setText(this.health);

        this.projectiles.children.entries.forEach(projectile => {
            projectile.update();
        })
        
    }

    kill(scene) {
        this.body.destroy();

        scene.time.delayedCall(50, () => {
            scene.tweens.add({
                targets: [this, this.healthText],
                alpha: 0,
                duration: 500,
                onComplete: () => {
                    this.projectiles.destroy();
                    this.healthText.destroy();
                    this.destroy();
                }
            })
        }); 
    }

    shoot(scene, type) {
        if (this.body != undefined) {
            let angle, velocity;
            if (type == 1) {
                angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, scene.player.x, scene.player.y)
                velocity = scene.physics.velocityFromAngle(angle, 1);
            } else if (type == 2) {
                angle = 90;
                velocity = new Phaser.Math.Vector2(-1, 0);
            }
            this.projectiles.add(new Projectile(scene, this.x, this.y,
                                                    'projectile', velocity,
                                                    this.body.width, this.body.height, 
                                                    angle, projectileSpeed/2).setScale(0.0625));
            scene.time.delayedCall(enemyFireRate, () => { 
                if (this.body != undefined) { this.shoot(scene, type) }
            });
        }
    }

    
}