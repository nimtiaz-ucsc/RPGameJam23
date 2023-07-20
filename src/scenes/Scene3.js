class Scene3 extends Phaser.Scene {

    constructor() {
        super('scene3');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [ 
            {
                speech: 'After completing yet another arduous stretch of their journey, the group finds another empty patch to rest in.'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Those bugs just do not let up, do they?'
            }, {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'Hey, George is taking those hits like a champ. How are you holding up big guy?'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'All things considered, pretty good! We\'re getting close to finding our new friend.'
            }, {
                portrait: 'george_sad',
                speaker: 'Big George',
                speech: 'But I am worried about what the Foam might be doing to me...'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'I\'ll run some tests on you when we get back home. But you seem to be fine for the most part. Maybe it doesn\'t--'
            }, {
                speech: 'Our heroes\' rest is interrupted when the ground suddenly begins to shake once more.'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'AGAIN?!'
            }, {
                portrait: 'george_sad',
                speaker: 'Big George',
                speech: 'HOLD ON TIGHT EVERYONE!'
            }, {
                frame: 'portal_night',
                speech: 'A familiar dark portal erupts before the group.'
            }, {
                frame: 'shop_night',
                speech: 'Before long, the portal disappears, leaving behind a distinct purple building:'
            }, {
                frame: 'shop_night',
                speech: 'the Dark Schippie Emporium.'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Oh. It\'s this guy again...'
            }, {
                portrait: 'dsd',
                speech: 'The shopkeeper\'s wicked smirk emerges from the shadows of the front window.'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'ARGH! I\'m still here?! '
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'Oh. It\'s you all again. I wish I could say it was a pleasure, but I just want to get out of this blasted dimension already.'
            }, {
                portrait: 'george_sad',
                speaker: 'Big George',
                speech: 'Oh... I\'m sorry to hear that.'
            }, {
                portrait: 'george_sad',
                speaker: 'Big George',
                speech: '...'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Got any more shiny things for me?'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: '...'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'If it will get you out of my hair, sure.'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'I still haven\'t had a chance to restock yet, so you\'ve still got the same 2 choices as last time.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Take your pick.',
                choice1: {
                    img: 'artifact_health',
                    callback: () => {
                        healthBuff++;
                    }
                },
                choice2: {
                    img: 'artifact_speed',
                    callback: () => {
                        speedBuff -= 0.25;
                    }
                }
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'Good, good. Now stand back, I\'m giving this another shot.'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'If everything goes right, I will never see you again, and you will never see me again.'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'Bye.'
            }, {
                frame: 'shop_night',
                speech: 'Dark Schippie Dues once again engages the dimensional engine in his shop, and it begins to rumble.'
            }, {
                frame: 'portal_night',
                speech: 'The portal re-opens, causing the ground to shake again. And then...'
            }, {
                speech: 'he\'s gone.'
            }, {
                end: true
            }
        ]

        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky3').setOrigin(0);
        this.moon = this.add.sprite(56, 0, 'moon').setOrigin(0).play('moon_anim');

        this.clouds1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds1').setOrigin(0);
        this.clouds1_sprite = this.add.sprite(0, 0, 'clouds1').setVisible(false).play('clouds1_anim');

        this.clouds2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'clouds2').setOrigin(0);
        this.clouds2_sprite = this.add.sprite(0, 0, 'clouds2').setVisible(false).play('clouds2_anim');

        this.grass1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass1').setOrigin(0);
        this.grass1_sprite = this.add.sprite(0, 0, 'grass1').setVisible(false).play('grass1_anim');

        this.grass2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass2').setOrigin(0);
        this.grass2_sprite = this.add.sprite(0, 0, 'grass2').setVisible(false).play('grass2_anim');

        this.dirt = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'dirt').setOrigin(0);
        this.dirt_sprite = this.add.sprite(0, 0, 'dirt').setVisible(false).play('dirt_anim');

        this.dialog = new Dialog(this, game.config.width/2, game.config.height * 0.8, undefined, this.sequence);

        new Button(this, 60, 50, 90, 50, 0xCCF0E4, 6, 0x10302A, 'text', 'SKIP >>', () => { 
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('level3'); }
            });
        });

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0).setDepth(1);
    }

    update() {
        this.clouds1.setFrame(this.clouds1_sprite.frame.name);
        this.clouds2.setFrame(this.clouds2_sprite.frame.name);
        this.grass1.setFrame(this.grass1_sprite.frame.name);
        this.grass2.setFrame(this.grass2_sprite.frame.name);
        this.dirt.setFrame(this.dirt_sprite.frame.name);

        this.clouds2.tilePositionX += bgSpeed/5;
        this.clouds1.tilePositionX += bgSpeed/10;

        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('level3'); }
            });
            
        }
    }
}