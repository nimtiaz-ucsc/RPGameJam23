class Button extends Phaser.GameObjects.Rectangle {

    constructor(scene, x, y, width, height, fillColor, strokeWidth, strokeColor, type, label, callback) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        this.setStrokeStyle(strokeWidth, strokeColor).setOrigin(0.5);

        if (type === 'img') {
            this.label = scene.add.sprite(x, y, label);
        } else if (type === 'text') {
            this.label = scene.add.text(x, y, label, 
                {color: '#' + strokeColor.toString(16), fontFamily: 'Pangolin', fontSize: '1px', align: 'center',
                wordWrap: {width: this.width * 0.9} }).setOrigin(0.5);

            let size = 1;
            while (this.label.width < this.width * 0.8 && this.label.height < this.height * 0.8) {
                size++;
                this.label.setFontSize(size);
            }
        }

        this.sfx_select = scene.sound.add('sfx_select');

        this.setDepth(1);
        this.label.setDepth(1);

        this.callback = callback;

        this.setInteractive( {useHandCursor: true})

        if (this.visible) {            
            this.on('pointerover', () => {
                this.setScale(1.1);
                this.label.setScale(1.1);
            })
            
            this.on('pointerout', () => {
                this.setScale(1);
                this.label.setScale(1);
            })

            this.on('pointerdown', () => {
                this.setScale(0.9);
                this.label.setScale(0.9);
            })

            this.on('pointerup', () => {
                this.sfx_select.play({volume: 0.75});
                this.setScale(1);
                this.label.setScale(1);
                this.callback();
            })
        }

    }

    visibility(setting) {
        this.setVisible(setting);
        this.label.setVisible(setting);
    }


}