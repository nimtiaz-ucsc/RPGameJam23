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

        this.healthText = this.add.text(10, 10, "hp: " + this.health, { color: '#000000', fontSize: '24px'}).setOrigin(0);

    }

    update() {
        this.healthText.setText("HP: " + this.player.health)
    }
}