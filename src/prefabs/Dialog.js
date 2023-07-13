class Dialog extends Phaser.GameObjects.Container {

    constructor(scene, x, y, children) {
        super(scene, x, y, children)
        scene.add.existing(this);

        scene.add.rectangle(x, y, game.config.width * 0.9, 200, 0xEDE6C4).setOrigin(0.5).setStrokeStyle(8, 0x3B352D);

        this.name = scene.add.text(x, y, 
            'This is a test dialog, normally real text would go here and convey a character\'s speech or some sort of narration, and hopefully eventually options to choose from, but what happens if I exceed the max height, I wonder hmmm lets see what happens oh looks like we\'re almost there, can we hit it? Okay looks like just one more line...', 
            {color: '#000000', fontSize: '36px', fontFamily: 'Pangolin',
            wordWrap: {width: game.config.width * 0.85}
        }).setOrigin(0.5)
    }




}