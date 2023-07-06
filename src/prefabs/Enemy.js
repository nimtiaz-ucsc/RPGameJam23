class Enemy extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, texture, type) {
        super(scene, x, y, texture);
        this.setScale(0.25);

        // this.points = basePoints * type;
        // this.health = type;
    }

    
}