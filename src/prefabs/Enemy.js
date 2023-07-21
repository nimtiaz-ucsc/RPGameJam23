class Enemy extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, type, weakness) {
        super(scene, x, y, 'enemy' + type + "_" + weakness);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.play('enemy' + type + "_" + weakness + "_anim");

        this.body.setVelocityX(((moveSpeed) * -1 / type) * enemySpeedBuff);

        this.points = basePoints * (4 - type);
        this.health = type + healthBuff;
        this.dead = false;

        this.weakness = weakness;

        let fontColor;

        if (weakness == 'bob') {
            fontColor = '#2ce8f5'
        }
        if (weakness == 'chuck') {
            fontColor = '#feae34'
        }
        if (weakness == 'sam') {
            fontColor = '#ff8ce6'
        }

        this.healthText = scene.add.text(x, y - this.body.height/2, "", {color: fontColor, fontSize: '100px', fontFamily: 'Pangolin'}).setOrigin(0.5);

        this.projectiles = new Phaser.GameObjects.Group;
        if (type != 3) { this.shoot(scene, type); }
        
        
    }

    update() {
        this.healthText.x = this.x - 50;
        this.healthText.y = this.y - 75;
        this.setHealthText();

        this.projectiles.children.entries.forEach(projectile => {
            projectile.update();
        })
        
    }

    kill(scene) {
        this.body.destroy();
        this.dead = true;

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
        if (!this.dead) {
            let angle, velocity, speed;
            if (type == 1) {
                speed = enemyFireRate * 0.5;
                angle = 135;
                velocity = scene.physics.velocityFromAngle(angle, 1);
            } else if (type == 2) {
                speed = enemyFireRate;
                angle = 90;
                velocity = new Phaser.Math.Vector2(-1, 0);
            }
            this.projectiles.add(new Projectile(scene, this.x, this.y,
                                                    'projectile_enemy', velocity,
                                                    this.body.width, this.body.height, 
                                                    angle, projectileSpeed/2));
            scene.time.delayedCall(speed * speedBuff, () => { 
                if (!this.dead) { this.shoot(scene, type) }
            });
        }
    }

    setHealthText() {
        let healthString = "";

        for (let i = 0; i < this.health; i++) {
            healthString += "."
        }

        this.healthText.setText(healthString);
    }

    
}