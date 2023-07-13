class PrefabTest extends Phaser.Scene {
    constructor() {
        super('prefabTest')
    }

    preload() {
        //
    }

    create() {
        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky').setOrigin(0);
        this.sun = this.add.sprite(56, 0, 'sun').setOrigin(0).play('sun_anim');

        this.clouds1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds1').setOrigin(0);
        this.clouds1_sprite = this.add.sprite(0, 0, 'clouds1').setVisible(false).play('clouds1_anim');

        this.clouds2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds2').setOrigin(0);
        this.clouds2_sprite = this.add.sprite(0, 0, 'clouds2').setVisible(false).play('clouds2_anim');

        this.grass1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass1').setOrigin(0);
        this.grass1_sprite = this.add.sprite(0, 0, 'grass1').setVisible(false).play('grass1_anim');

        this.grass2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass2').setOrigin(0);
        this.grass2_sprite = this.add.sprite(0, 0, 'grass2').setVisible(false).play('grass2_anim');

        this.dirt = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'dirt').setOrigin(0);
        this.dirt_sprite = this.add.sprite(0, 0, 'dirt').setVisible(false).play('dirt_anim');


        this.ground = this.add.rectangle(0, game.config.height, game.config.width, 32, 0x733e39).setOrigin(0, 1).setVisible(false);
        this.physics.add.existing(this.ground, true);     
        
        this.player = new Player(this, game.config.width/8, game.config.height/2);

        this.physics.add.collider([this.player, this.player.aim], this.ground);

        this.UIText = this.add.text(10, 10, "HP: " + this.player.health + "\nSCORE: " + this.player.score, { color: '#000000', fontSize: '24px', fontFamily: 'Pangolin'}).setOrigin(0);

        this.enemies = this.physics.add.group();
        this.enemies.defaults = {};
        this.spawnEnemy();

        this.physics.add.overlap(this.player, this.enemies, this.player.damage, undefined, this);
        this.physics.add.overlap(this.player.projectiles, this.enemies, this.destroyEnemy, undefined, this);

    }

    update() {
        if(this.player.isAlive) { 
            this.player.update();

            this.clouds1.setFrame(this.clouds1_sprite.frame.name);
            this.clouds2.setFrame(this.clouds2_sprite.frame.name);
            this.grass1.setFrame(this.grass1_sprite.frame.name);
            this.grass2.setFrame(this.grass2_sprite.frame.name);
            this.dirt.setFrame(this.dirt_sprite.frame.name);

            this.dirt.tilePositionX += bgSpeed;
            this.grass2.tilePositionX += bgSpeed/2;
            this.grass1.tilePositionX += bgSpeed/4;
        }

        this.clouds2.tilePositionX += bgSpeed/5;
        this.clouds1.tilePositionX += bgSpeed/10;
        this.sun.x -= bgSpeed/20;

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