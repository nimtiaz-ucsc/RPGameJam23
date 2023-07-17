class Scene1 extends Phaser.Scene {

    constructor() {
        super('scene1');
    }

    preload() {
        //
    }

    create() {
        this.complete = false;

        this.sequence = [
            {
                speech: 'Our story begins in a peculiar little world, full of peculiar little people.'
            }, {
                speech: 'One peculiar little quirk of this peculiar little world is that everyone has precisely 3 friends. No more, no less.'
            }, {
                speech: 'And the only way to break up with a friend is to solve their trick.'
            }, {
                speech: 'This is Wuhl Village, a small settlement out in the middle of a large patch of grass, and home to the Wuhlen, a race of tiny people made entirely of cotton wool.',
                frame: 'village'
            }, {
                speech: 'Recently, the village has been facing a serious threat: one day, the native insects of the field suddenly fell into a vicious frenzy, attacking anything in sight.',
                frame: 'attack'
            }, {
                speech: 'The only possible explanation to what caused this is a ghastly green froth at their mouths, which the Wuhlen have simply dubbed "The Foam."',
                frame: 'attack'
            }, {
                speech: 'The village also happens to be home to the hero of our story, a particularly adventurous little Wuhlen named Big George...',
                frame: 'village'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'All right! Today\'s the day! My grand quest begins!'
            }, {
                portrait: 'george',
                speech: 'This is Big George.'
            }, {
                portrait: 'george',
                speech: 'What he lacks in common sense he makes up for with boundless optimism and desire to do good by his people.'
            }, {
                portrait: 'george',
                speech: 'George has been obsessed with the rumor of a mysterious mythical being who can bend the rules of reality, and grant anyone a fourth friend.'
            }, {
                portrait: 'george',
                speech: 'His hope is that while groups of four have not been able to fend off Foamy insects, groups of five might stand a chance.'
            }, {
                portrait: 'george',
                speech: 'George, of course, is not without his own group of friends. His closest companions, who are about to embark on this quest with him, now arrive...'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'You guys! Over here!'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'What\'s good, big man?'
            }, {
                portrait: 'chuck',
                speech: 'This is Buff Chuck.'
            }, {
                portrait: 'chuck',
                speech: 'One of the more physically imposing Wuhlen, he has been friends with Big George since their youth, watching over him as a protective brotherly figure. ' + 
                        'In fact, it was him who gave Big George his title, as a way to boost his self-confidence.'
            }, {
                portrait: 'chuck',
                speech: 'His prowess in combat and mastery of the formidable Steel Wool technique will make him an invaluable ally in this quest.'
            }, {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'Alright, who\'s ready to go questing?!' 
            }, {
                portrait: 'bob',
                speech: 'This is Tiny Bob.' 
            }, {
                portrait: 'bob',
                speech: 'Ever enthusiastic and upbeat, there isn\'t much that can bring this perpetually smiling Wuhlen\'s spirits down. ' +
                        'He is the heart of the group, and his infectious positivity gives them the mental energy and support to keep going in the face of adversity.'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'Hey, guys.'
            }, {
                portrait: 'sam',
                speech: 'This is Lanky Sam.'
            }, {
                portrait: 'sam',
                speech: 'As one of Wuhl Village\'s smartest residents, she is an invaluable member of the team, and able to figure out a solution to almost any tricky situation the group may find themselves in.'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Great, everyone\'s here! Now let\'s get down to business.'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'As you all know, we will be setting out to find a way to make another friend, and the path will be nothing short of dangerous, thanks to the Foam.'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'About that. How exactly do we plan on dealing with those Foamy bugs?'
            }, {
                portrait: 'george',
                speaker: 'Big George', 
                speech: 'Don\'t worry, Sam has got that all figured out. Will you do the honors?'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'Of course.'
            }, {
                speaker: 'Lanky Sam',
                speech: 'So, we\'ll have George take the lead on this. He can pluck chunks of cotton from himself and lob them at the bugs, which can incapacitate them if he throws enough at them.',
                frame: 'blueprint'
            }, {
                speaker: 'Lanky Sam',
                speech: 'Another issue is that the bugs have mutated to be a little more resistant to attacks, but I\'ve whipped up some enhancements to George\'s wool. We\'ll each need to carry one, and he can call on whoever he needs for each one.',
                frame: 'blueprint'
            }, {
                portrait: 'sam',
                speaker: 'Lanky Sam',
                speech: 'Is that clear with everyone?'
            }, {
                portrait: 'bob',
                speaker: 'Tiny Bob',
                speech: 'Clear!'
            }, {
                portrait: 'chuck',
                speaker: 'Buff Chuck',
                speech: 'Affirmative.'
            }, {
                portrait: 'george',
                speaker: 'Big George',
                speech: 'Great! Then let\'s get a move on!'
            }, {
                end: true
            }
        ]

        this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'sky1').setOrigin(0);
        this.sun = this.add.sprite(56, 0, 'sun').setOrigin(0).play('sun_anim');

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
    }

    update() {
        this.clouds1.setFrame(this.clouds1_sprite.frame.name);
        this.clouds2.setFrame(this.clouds2_sprite.frame.name);
        this.grass1.setFrame(this.grass1_sprite.frame.name);
        this.grass2.setFrame(this.grass2_sprite.frame.name);
        this.dirt.setFrame(this.dirt_sprite.frame.name);

        this.dialog.update();
        if (this.dialog.complete && !this.complete) {
            this.complete = true;
            this.black = this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000).setOrigin(0).setAlpha(0);
            this.tweens.add({
                targets: [this.black],
                alpha: 1,
                duration: 1000,
                onComplete: () => { this.scene.start('level1'); }
            });
            
        }
    }






}