class Epilogue extends Phaser.Scene {

    constructor() {
        super('epilogue');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [
            {
                speech: '~ Epilogue ~'
            }, {
                speech: 'It\'s a calm, quiet night out in the grass fields.'
            }, {
                speech: 'But not for very long.'
            }, {
                frame: 'portal_night',
                speech: 'The ground suddenly begins to quake as a dark interdimensional portal opens up.'
            }, {
                frame: 'shop_night',
                speech: 'Moments later, the portal disappears, and in its place is an ominous purple and green shop.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Let\'s see... where did I end up this time...?'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Oh of course! This is the dimension with all of those adorable little woolly people! I haven\'t been here in years!'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'I hope those four friendly fellows I met last time are still around. They were positively delightful! And I do regret that my last interaction with them was... not on the best of terms...'
            }, {
                portrait: 'dsd',
                speech: 'But Dark Schippie Dues senses something amiss; something doesn\'t feel quite right about the night.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Hmmm... something\'s off about the air here... It\'s too still...'
            }, {
                frame: 'village_foam',
                speech: 'The salesman peers off in the distance, and notices what looks like a town or village settlement, but completely covered in a sickly green foamy substance.'
            }, {
                portrait: 'dsd',
                speech: 'As he continues to scan his surroundings, something shiny lays still in the grass near his shop\'s landing zone, catching his eye.'
            }, {
                portrait: 'dsd',
                speech: 'He approaches to investigate. As he draws near, he notices the entrance to a dark cave near the spot where the shiny object sits.'
            }, {
                portrait: 'dsd',
                speech: 'When he does get a closer look at the mysterious object, he recoils in shock.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'Oh my...'
            }, {
                frame: 'glasses',
                speech: 'A familiar pair of pink sunglasses lays shattered on the ground, next to a scattered trail of flecks of wool.'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'glasses',
                speech: 'Looks like things didn\'t turn out so well for...'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'glasses',
                speech: 'What was his name?'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'glasses',
                speech: 'Large Jorge?'
            }, {
                speaker: 'Dark Schippie Dues',
                frame: 'glasses',
                speech: 'That sounds right.'
            }, {
                speech: 'Dark Schippie Dues scans the surrounding area for any more remains, but comes up empty.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'That\'s okay Jorge, my friend... I\'m sure we can figure out some way to fix you up.'
            }, {
                portrait: 'dsd',
                speech: 'He scoops up as many of the wool chunks as he can find, and grabs the sunglasses.'
            }, {
                speaker: 'Dark Schippie Dues',
                portrait: 'dsd',
                speech: 'And worst case -- I could just sell this stuff off.'
            }, {
                frame: 'shop_night',
                speech: 'Dark Schippie Dues claims his spoils and returns to his shop...'
            }, {
                frame: 'portal_night',
                speech: '...fires up his dimensional engine...'
            }, {
                speech: '...and disappears without a trace, off to pursue his business venture in other worlds yet unseen...'
            }, {
                speech: '~ End Epilogue ~'
            }, {
                speech: 'Thanks for playing!'
            }, {
                end: true
            }
        ];

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
                onComplete: () => { this.scene.start('mainMenu'); }
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
                onComplete: () => { this.scene.start('mainMenu'); }
            });
            
        }
    }
}