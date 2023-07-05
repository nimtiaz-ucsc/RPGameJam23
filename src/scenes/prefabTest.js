class PrefabTest extends Phaser.Scene {
    constructor() {
        super('prefabTest')
    }

    preload() {
        //
    }

    create() {

        this.player = new Player(this, game.config.width/2, game.config.height/2);

        this.ground = this.add.rectangle(0, game.config.height, game.config.width, 64, 0xAAAAAA).setOrigin(0, 1);
        this.physics.add.existing(this.ground, true);        
        this.physics.add.collider([this.player, this.player.aim], this.ground);

        this.healthText = this.add.text(10, 10, "hp: " + this.player.health, { color: '#000000', fontSize: '24px'}).setOrigin(0);

        this.enemies = this.physics.add.group();
        this.spawnEnemy();

        this.physics.add.overlap(this.player, this.enemies, this.player.damage, undefined, this);
        this.physics.add.overlap(this.player.projectiles, this.enemies, this.destroyEnemy, undefined, this);

    }

    update() {
        this.player.update();

        this.healthText.setText("HP: " + this.player.health);
        
    }

    spawnEnemy() { 
        if (Phaser.Math.Between(1, spawnChanceMax) <= spawnChanceMin) {
            let spawnHeight = Phaser.Math.Between(1, 3) * game.config.height / 4;
            let enemy = this.enemies.add(this.physics.add.sprite(game.config.width, spawnHeight, 'projectile').setScale(0.25));
            enemy.flipX = true;
            enemy.setVelocityX(moveSpeed * -0.5);
        }
        this.time.delayedCall(spawnRate, () => {
            this.spawnEnemy();
        });
    }

    destroyEnemy(projectile, enemy) {
        projectile.body.setVelocity(0);
        projectile.body.destroy();
        enemy.body.destroy();

        this.time.delayedCall(50, () => {
            this.tweens.add({
                targets: [projectile, enemy],
                alpha: 0,
                duration: 500,
                onComplete: () => {
                    projectile.destroy();
                    enemy.destroy();  
                }
            })
        }); 
    }

    
}