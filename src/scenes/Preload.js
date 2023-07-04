class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('george', 'assets/BigGeorgeBody.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('aim', 'assets/BigGeorgeAimArm.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('projectile', 'assets/BigGeorgeProjectile.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
    }

    create() {

        this.scene.start('prefabTest');
    }
}