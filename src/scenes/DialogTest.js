class DialogTest extends Phaser.Scene {
    constructor() {
        super('dialogTest')
    }

    preload() {
        //
    }

    create() {
        console.log('hi');

        this.dialog = new Dialog(this, game.config.width/2, game.config.height * 0.8);

        
    }

}