class PrefabTest extends Phaser.Scene {
    constructor() {
        super('prefabTest')
    }

    preload() {
        //
    }

    create() {
        this.ground = this.add.rectangle(0, game.config.height, game.config.width, 64, 0xAAAAAA).setOrigin(0, 1);
        this.physics.add.existing(this.ground, true);     
        
        this.player = new Player(this, game.config.width/8, game.config.height/2);

        this.physics.add.collider([this.player, this.player.aim], this.ground);

        this.UIText = this.add.text(10, 10, "HP: " + this.player.health + "\nSCORE: " + this.player.score, { color: '#000000', fontSize: '24px'}).setOrigin(0);

        this.enemies = this.physics.add.group();
        this.enemies.defaults = {};
        this.spawnEnemy();

        this.physics.add.overlap(this.player, this.enemies, this.player.damage, undefined, this);
        this.physics.add.overlap(this.player.projectiles, this.enemies, this.destroyEnemy, undefined, this);

    }

    update() {
        if(this.player.isAlive) { this.player.update(); }

        this.enemies.children.entries.forEach(enemy => {
            enemy.update();
            this.physics.add.overlap(this.player, enemy.projectiles, this.player.damage, undefined, this);
            if (enemy.x < enemy.body.width * -1) {
                enemy.kill(this);
            }
        })

        this.UIText.setText("HP: " + this.player.health + "\nSCORE: " + this.player.score);
        
    }

    spawnEnemy() {
        if (Phaser.Math.Between(1, spawnChanceMax) <= spawnChanceMin) {
            let enemyType = Phaser.Math.Between(1, 3);
            let spawnHeight = enemyType * game.config.height / 4;
            this.enemies.add(new Enemy(this, game.config.width, spawnHeight, 'projectile', enemyType));
        }
        this.time.delayedCall(spawnRate, () => {
            this.spawnEnemy();
        });
    }

    destroyEnemy(projectile, enemy) {
        this.player.score += enemy.points;
        projectile.body.setVelocity(0);
        projectile.body.destroy();
        this.time.delayedCall(50, () => {
            this.tweens.add({
                targets: [projectile],
                alpha: 0,
                duration: 500,
                onComplete: () => {
                    projectile.destroy();
                }
            })
        }); 

        enemy.health--;
        if (enemy.health == 0) {
            enemy.kill(this);
        }
    }

    
}