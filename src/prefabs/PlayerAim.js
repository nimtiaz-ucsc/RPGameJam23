class PlayerAim extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y) {
        super(scene, x, y, 'george_aim');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.play('aim_anim');

        scene.events.on('update', this.update, this);

        this.pointer = scene.input.activePointer;
    }

    update() {
        this.angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, this.pointer.x, this.pointer.y);
        this.setAngle(this.angle);
    }
}