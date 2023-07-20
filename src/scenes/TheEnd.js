class TheEnd extends Phaser.Scene {

    constructor() {
        super('theEnd');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [ {speech: 'Hee-hee hee!'}, {end: true}]

        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0);

        this.dialog = new Dialog(this, game.config.width/2, game.config.height/2, undefined, this.sequence);

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0).setDepth(1);
    }

    update() {
        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('mainMenu'); }
            });   
        }
    }






}