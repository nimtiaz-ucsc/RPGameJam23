class Scene2 extends Phaser.Scene {

    constructor() {
        super('scene2');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [
            {
                speech: 'As the sun begins to set, our heroes approach a clearing in the grass, where they begin to feel the earth rumbling beneath them.'
            }, {
                portrait: 'george_sad',
                speaker: 'Big George',
                speech: 'Um... do you guys feel that?'
            }, {
                portrait: 'sam_sad',
                speaker: 'Lanky Sam',
                speech: 'Yeah, but what could it--'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Brace yourselves!'
            }, {
                speech: 'Suddenly, a dark, murky portal materializes out of thin air, right in the middle of the clearing.',
                frame: 'portal_sunset'
            }, {
                speaker: 'Tiny Bob',
                speech: 'Woah... what in the world is that?',
                frame: 'portal_sunset'
            }, {
                speaker: 'Lanky Sam',
                speech: 'No idea, but do NOT go ANYWHERE near it.',
                frame: 'portal_sunset'
            }, {
                speech: 'After a few moments, the portal subsides, and in it\'s place is a strangely colored market stand.',
                frame: 'shop_sunset'
            }, {
                speaker: 'Big George',
                speech: 'Is that... a shop?',
                frame: 'shop_sunset'
            }, {
                speaker: '???',
                speech: 'Indeed it is, friends!',
                frame: 'shop_sunset'
            }, {
                portrait: 'dsd_silhouette',
                speech: 'A mysterious figure calls out from deep within the shop, beckoning our heroes closer.'
            }, {
                speaker: '???',
                portrait: 'dsd_silhouette',
                speech: 'Please, friends. I mean no harm! In fact I may even be able to be of service to you!'
            }, {
                speaker: 'Big George', 
                portrait: 'george',
                speech: 'Good enough for me!'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Hold on a sec, George. We don\'t even know who this guy is.'
            }, {
                speaker: '???',
                portrait: 'dsd_silhouette',
                speech: 'Oh, well allow me to remedy that! My name...'
            }, {
                speaker: '???',
                portrait: 'dsd',
                speech: '...is Dark Schippie Dues.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'I am not from your universe, and to be quite honest I didn\'t mean to end up here. My dimensional engine has been malfunctioning as of late, so until I land in a dimension that has the parts I need, I\'m kind of just hopping around here and there.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Wow. Is everyone from your world such a snappy dresser?'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Ah, well usually I opt for something a little more comfortable, but learned the hard way that people from most dimensions tend not to buy things from clowns in poorly-lit shops.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Buy things?'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Oh of course! I was so caught up in my troubles that I forgot to give you the whole pitch!'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: '*ahem*'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'shop_sunset',
                speech: 'Welcome to the Dark Schippie Emporium! As a multidimensional traveler, I can offer you items that I have picked up from my travels that you quite literally cannot find anywhere else!'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Unfortunately, I am running a bit low on stock right now, but I do have two items that may interest you!'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'artifact_health',
                speech: 'This is an Amulet of Vitality! It is said that one who wears will be granted greater durability in the face of danger!'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'artifact_health',
                speech: 'It is also totally not at all cursed to grant your foes similar benefits.'
            }, {
                frame: 'artifact_health',
                speech: 'A tag on the amulet reads, "+1 HP to you, but +1 HP to your foes as well." Whatever that could mean.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'But that\'s not all, I also have this!'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'artifact_speed',
                speech: 'Behold, the Ring of Swiftness! This powerful item will allow you to perform certain tasks quicker, although I have yet to figure out what exactly it speeds up.'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'artifact_speed',
                speech: 'Again, this definitely will not also benefit your enemies.'
            }, {
                frame: 'artifact_speed',
                speech: 'A tag on the ring reads, "Your projectiles receive increased rate of fire, but your foes receive a speed boost."'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Wow, I\'ve never seen anything like this... these are beautiful!',
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Indeed they are, my friend!'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'But not as beautiful as Melanie!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Hmm? Who\'s Melanie?',
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Sorry, just some contractual obligations.',
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'So, since you all have been absolutely delightful, please take one of these artifacts on the house!',
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Dude! Sick!',
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Well, it\'s your call, George. Which one do you want?'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'What\'ll it be, friend?',
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
                speech: 'An excellent choice! Now, I must be on my way. And I have a feeling you all do, too.'
            }, {
                portrait: 'dsd',
                speaker: 'Dark Schippie Dues',
                speech: 'Farewell!'
            }, {
                frame: 'shop_sunset',
                speech: 'The mysterious shopkeeper retreats to the shop building, and can be heard struggling with some machinery in the back.'
            }, {
                frame: 'portal_sunset',
                speech: 'The ground begins to shake violently once more, and the dark portal opens up again, engulfing the shop whole.'
            }, {
                speech: 'Soon after, the shop is gone without a trace.'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Huh. What an odd guy.'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Hey, at least we got this cool little trinket thingy out of it!'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'If it even works.'
            }, {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'Hey, even if it ends up being a dud, at least it looks cool!'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'Fair enough. Now we better get going.'
            }, {
                end: true
            }
        ]

        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky2').setOrigin(0);
        this.sunset = this.add.sprite(56, 0, 'sunset').setOrigin(0).play('sunset_anim');

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
                onComplete: () => { this.scene.start('level2'); }
            });
        });

        this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0);
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
                onComplete: () => { this.scene.start('level2'); }
            });
            
        }
    }






}