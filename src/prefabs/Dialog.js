class Dialog extends Phaser.GameObjects.Container {

    constructor(scene, x, y, children, sequence) {
        super(scene, x, y, children)
        scene.add.existing(this);

        this.sequence = sequence;
        this.index = 0;
        this.complete = false;
        
        this.choice1 = new Button(scene, game.config.width/4, game.config.height/3, 200, 200, 0xCCF0E4, 6, 0x10302A, 'img', 'projectile', null);
        this.choice1.visibility(false);

        this.choice2 = new Button(scene, game.config.width/2, game.config.height/3, 200, 200, 0xCCF0E4, 6, 0x10302A, 'img', 'projectile', null);
        this.choice2.visibility(false);
        
        this.choice3 = new Button(scene, game.config.width/4 * 3, game.config.height/3, 200, 200, 0xCCF0E4, 6, 0x10302A, 'img', 'projectile', null)
        this.choice3.visibility(false);

        this.frame = scene.add.rectangle(game.config.width/2, game.config.height/3 - 15, 800, 400, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(6, 0x10302A).setVisible(false);
        this.frameImage = scene.add.sprite(game.config.width/2, game.config.height/3 - 15, 'sky').setOrigin(0.5).setVisible(false);

        this.choices = false;

        this.portrait = scene.add.sprite(game.config.width - 75, y - 230, 'portrait_' + this.sequence[0].portrait).setOrigin(1, 0.5).setVisible(false);
        this.bodyBox = scene.add.rectangle(x, y, game.config.width * 0.9, 200, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(6, 0x10302A);
        this.speakerBox = scene.add.rectangle(x - 350, y - 100, 200, 50, 0xCCF0E4).setOrigin(0.5).setStrokeStyle(6, 0x10302A);

        this.continue = scene.add.sprite(x + 440, y + 65, 'dialog_continue').setOrigin(0.5).play('continue_anim')

        this.speakerText = scene.add.text(x - 350, y - 100, '',
        {color: '#10302A', fontSize: '30px', fontFamily: 'Pangolin'}).setOrigin(0.5)

        this.bodyText = scene.add.text(x, y + 10, '',
            {color: '#10302A', fontSize: '36px', fontFamily: 'Pangolin', align: 'left',
            wordWrap: {width: game.config.width * 0.8}
        }).setOrigin(0.5);

        this.isTyping = false;
        this.progress(scene);
        
        scene.input.on('pointerup', () => {
            scene.input.mouse.disableContextMenu();
            if (!this.choices) {
                this.progress(scene);
            }

        });
    }

    update() {
        if (this.isTyping) { this.continue.setVisible(false)} else { this.continue.setVisible(true) }
    }

    scale(textObj, max, dimension) {
        let size = textObj.style.fontSize;
        let newSize = Number(size.slice(0, size.length - 2));

        if (dimension === 'y') {
            textObj.setFontSize(36)
            while (textObj.height > max) {
                newSize--;
                textObj.setFontSize(newSize)
            }
        } else if (dimension === 'x') {
            textObj.setFontSize(30)
            while (textObj.width > max) {
                newSize--;
                textObj.setFontSize(newSize)
            }
        }
    }

    progress(scene) {
        let currLine = this.sequence[this.index]

        if (currLine.end != null) {
            this.complete = true;
            return;
        }

        if (currLine.portrait === undefined) {
            this.portrait.setVisible(false);
        } else {
            this.portrait.setVisible(true).setTexture('portrait_' + currLine.portrait)
        }

        if (currLine.speaker === undefined) {
            this.speakerBox.setVisible(false);
            this.speakerText.setText('');
        } else {
            this.speakerBox.setVisible(true);
            this.speakerText.setText(currLine.speaker);
        }


        let i = 0;
        this.bodyText.setText("");
        if (this.isTyping) {
            this.isTyping = false;
            this.typing.remove();
            this.bodyText.setText(currLine.speech);
            if (currLine.next == undefined) {
                this.index++;
            } else {
                this.index = currLine.next;
            }
            
        } else {
            this.typing = scene.time.addEvent({
                callback: () => {
                    this.isTyping = true;
                    this.bodyText.text += currLine.speech[i];
                    i++;
                    if (i == currLine.speech.length) {
                        this.isTyping = false;
                        if (currLine.next == undefined) {
                            this.index++;
                        } else {
                            this.index = currLine.next;
                        }
                        this.speakerText.setFontSize(36);
                        this.bodyText.setFontSize(30);
                        this.scale(this.speakerText, 180, 'x');
                        this.scale(this.bodyText, 150, 'y');
                    }
                },
                repeat: currLine.speech.length - 1,
                delay: 25
            })
        }
        this.speakerText.setFontSize(36);
        this.bodyText.setFontSize(30);
        this.scale(this.speakerText, 180, 'x');
        this.scale(this.bodyText, 150, 'y');

        if (currLine.choice1 != undefined) {
            this.choices = true;
            this.choice1.visibility(true);
            this.choice1.label.setTexture(currLine.choice1.img);
            this.choice1.callback = () => {
                currLine.choice1.callback();
                this.choices = false;
            };
        } else {
            this.choice1.visibility(false);
        }
        if (currLine.choice2 != undefined) {
            this.choices = true;
            this.choice2.visibility(true);
            this.choice2.label.setTexture(currLine.choice2.img);
            this.choice2.callback = () => {
                currLine.choice2.callback();
                this.choices = false;
            };
        } else {
            this.choice2.visibility(false);
        }
        if (currLine.choice3 != undefined) {
            this.choices = true;
            this.choice3.visibility(true);
            this.choice3.label.setTexture(currLine.choice3.img);
            this.choice3.callback = () => {
                currLine.choice3.callback();
                this.choices = false;
            };
        } else {
            this.choice3.visibility(false);
        }
        if (currLine.choice1 == undefined && currLine.choice2 == undefined && currLine.choice3 == undefined) {
            this.choices = false;
        }

        if (currLine.frame != undefined) {
            this.frame.setVisible(true);
            this.frameImage.setVisible(true).setTexture(currLine.frame);
        } else {
            this.frame.setVisible(false);
            this.frameImage.setVisible(false)
        }
    }




}