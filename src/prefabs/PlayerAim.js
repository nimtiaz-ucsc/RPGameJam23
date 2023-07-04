class PlayerAim extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y) {
        super(scene, x, y, 'aim');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        scene.events.on('update', () => {
            //super.update();
            this.update;
        }, this);

        this.pointer = scene.input.activePointer;
    }

    update() {
        this.aimAngle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, this.pointer.x, this.pointer.y);
        this.setAngle(this.aimAngle);
    }
}