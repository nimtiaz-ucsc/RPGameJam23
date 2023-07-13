class Dialog extends Phaser.GameObjects.Container {

    constructor(scene, x, y, children, sequence) {
        super(scene, x, y, children)
        scene.add.existing(this);

        this.sequence = sequence;

        this.portrait = scene.add.sprite(game.config.width - 75, y - 230, 'portrait_' + this.sequence[0].portrait).setOrigin(1, 0.5);
        this.bodyBox = scene.add.rectangle(x, y, game.config.width * 0.9, 200, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(6, 0x10302A);
        this.speakerBox = scene.add.rectangle(x - 350, y - 100, 200, 50, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(6, 0x10302A);

        this.continue = scene.add.sprite(x + 440, y + 65, 'dialog_continue').setOrigin(0.5).play('continue_anim')

        this.speakerText = scene.add.text(x - 350, y - 100, this.sequence[0].speaker,
        {color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin'}).setOrigin(0.5)

        this.bodyText = scene.add.text(x, y + 10, 
            //'This is a test dialog, normally real text would go here and convey a character\'s speech or some sort of narration, and hopefully eventually options to choose from, but what happens if I exceed the max height, I wonder hmmm lets see what happens oh looks like we\'re almost there, can we hit it? Okay looks like just one more line...', 
            this.sequence[0].speech,
            {color: '#10302A', fontSize: '36px', fontFamily: 'Pangolin', align: 'left',
            wordWrap: {width: game.config.width * 0.8}
        }).setOrigin(0.5);

        this.scale(this.bodyText, 150);
    }

    update() {
        //
    }

    scale(textObj, max) {
        let size = textObj.style.fontSize;
        let newSize = Number(size.slice(0, size.length - 2));

        while (textObj.height > max) {
            newSize--;
            textObj.setFontSize(newSize)
        }
    }




}