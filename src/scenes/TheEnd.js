class TheEnd extends Phaser.Scene {

    constructor() {
        super('theEnd');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [ {speech: 'Hee hee-hee!'}, {speech: 'Hee.'}, {end: true}]

        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0);

        this.dialog = new Dialog(this, game.config.width/2, game.config.height/2, undefined, this.sequence);

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0).setDepth(1);        
        this.endText = this.add.text(game.config.width/2, game.config.height/2 - 100, 'THE END', {color: '#FF0044', fontSize: '120px', fontFamily: 'Pangolin'}).setOrigin(0.5).setAlpha(0).setDepth(1);
        this.glasses_shadow = this.add.ellipse(10, game.config.height - 30, 700, 75, 0x555577).setOrigin(0, 1).setAlpha(0).setDepth(1);
        this.glasses = this.add.sprite(0, game.config.height + 50, 'glasses').setOrigin(0, 1).setAlpha(0).setDepth(1);
    }

    update() {
        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { 
                    this.tweens.add({
                        targets: [this.glasses, this.glasses_shadow],
                        alpha: 1,
                        duration: 2000,
                        onComplete: () => { 
                            this.tweens.add({
                                targets: [this.endText],
                                alpha: 1,
                                duration: 2000,
                                onComplete: () => { 
                                    this.time.delayedCall(1000, () => {
                                        new Button(this, game.config.width/2, game.config.height/2 + 10, 150, 75, 0xCCF0E4, 6, 0x10302A, 'text', 'CONTINUE', () => { this.scene.start('mainMenu') });
                                    });
                                 }
                            });                            
                         }
                    }); 
                 }
            });   
        }
    }






}