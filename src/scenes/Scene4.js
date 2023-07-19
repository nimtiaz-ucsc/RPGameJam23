class Scene4 extends Phaser.Scene {

    constructor() {
        super('scene4');
    }

    preload() {
        
    }

    create() {
        this.complete = false;

        this.sequence = [
            {
                speech: 'After quite the impressive journey, Big George and his friends arrive at their destination: a dark cave deep in the heart of the grass fields, said to be home to the creature that can grant them another friend.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'We finally made it! It didn\'t even really feel that long, either!'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'You\'re kidding, right? That took FOREVER. But I guess I can\'t complain now. Whatever is in there better be worth it.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Speaking of "whatever is in there"... what do you guys think it looks like?'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'I\'ve heard it has long hair. Like really long. So long that its body is just wrapped in hair.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Oooh, cool... I bet it has long, gnarly fingers and tiny little fangs. I hope so, at least.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Why would you hope--'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Shush... I think I hear something.'
            }, {
                speech: 'Emanating from deep within the caverns comes a shrill, chittering laugh. Its echo reverberates throughout the cave.'
            }, {
                speaker: '???',
                speech: 'Hee hee-hee hee...!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Is... is that a laugh?'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Sounds like someone\'s having a good time down there.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Then let\'s go join them! C\'mon guys!'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Wait!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Be careful, you two!'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Hmph... guess we better head after them.'
            }, {
                speech: 'The group makes the perilous descent down into the depths of the cave, following the source of the laughter, getting louder and louder as they approach.'
            }, {
                speaker: '???',
                speech: 'Hee hee-hee hee...!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Okay, this has to be it. If we just turn into this chamber over here...'
            }, {
                speech: 'The group ducks down into a small opening, and find themselves standing in the biggest section of the cave so far, with a tall ceiling and several flat stone platforms.'
            }, {
                speech: 'Sitting atop one of the platforms is... something... something strange...'
            }, {
                speech: 'Perhaps it is what our heroes have been searching for all along.'
            }, {
                speaker: '???',
                portrait: 'solveig_silhouette',
                speech: 'Hee hee-hee hee...!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'There! That\'s where the laugh has been coming from.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Hello...?'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Hold on a sec, George. We should be careful.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Why? It -- um, they -- haven\'t given us a reason to.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Hello! Can... can you understand me?'
            }, {
                speaker: '???',
                portrait: 'solveig_silhouette',
                speech: 'Of course Solveig can understand you. Solveig is no barbarian.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Solveig?'
            }, {
                speech: 'The creature steps forward slightly, enough to reveal their face in the thin sliver of light shining through a crack above.'
            }, {
                speaker: '???',
                portrait: 'solveig',
                speech: 'Yes. Solveig. Solveig is Solveig\'s name. Hee.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Well hello, Solveig! My name is George. Big George. But George for short. Feel free to call me whatever\'s comfortable for you.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Solveig greets you, George-Big-George-But-George-For-Short. Hee hee.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Oh, uh, that\'s not quite--'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'We should probably get down to what we came here for. Solveig, are you the one who can give anyone the power to make a fourth friend?'
            }, {
                portrait: 'solveig',
                speech: 'Solveig\'s eyes perk up at the mention of the fourth friend, and for a brief moment a mischeviousness glint flickers across their face.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee hee-hee hee! Yes! Yes! Yes-yes-yes! You come looking for more friends, yes! Hee hee! Solveig and Solveig\'s friends can definitely help you with this!'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'Oh! You have more friends? We\'d love to meet them! Are they coming by soon?'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee hee! Solveig\'s friends are already here!'
            }, {
                speech: 'The group is confused as to what Solveig could possibly be talking about, until they focus their gaze more on their surroundings.'
            }, {
                speech: 'Strewn about the cavern...'
            }, {
                frame: 'cave',
                speech: '...are skeletons.'
            }, {
                speaker: 'Tiny Bob',
                frame: 'cave',
                speech: 'O-oh, uh, um wh-what...'
            }, {
                speaker: 'Lanky Sam',
                frame: 'cave',
                speech: 'I think I\'m gonna be sick...'
            }, {
                speaker: 'Buff Chuck',
                frame: 'cave',
                speech: 'What kind of twisted freak are you?!'
            }, {
                speaker: 'Solveig',
                frame: 'cave',
                speech: 'Freak? Twisted freak? Hee hee-hee! Is Solveig a freak-twisted-freak for keeping Solveig\'s friends around past their expiration dates? Hee.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Listen guys, you\'ve gotta get it together. Remember why we\'re here.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'George... I *hrk!* I think you need to *hrk!*'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'I think this is your time to step up, big guy.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'You got this.'
            }, {
                portrait: 'george_sad',
                speech: 'George takes a moment to steel himself. If they turned back now, all that they accomplished on this trip would be for nothing. And they would be of no help for the people back at home fending for their lives against all those Foamy bugs.'
            }, {
                portrait: 'george_sad',
                speech: 'He had to do this.'
            }, {
                speaker: 'Big George',
                portrait: 'george',
                speech: 'Okay. Solveig. Can you or can you not give us another friend?'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Why yes, of course Solveig can, hee! However, Solveig only asks one thing.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'You must be Solveig\'s friend.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'B-b-but... I already have 3 friends.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Then make room for Solveig.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'Are you KIDDING ME?! This is RIDICULOUS! You\'re asking George to solve one of our tricks. But he doesn\'t even know--'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'I do.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: '...'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'What?'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: '...'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'I... I do.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'I had to be prepared. We had no idea what this journey would entail. So I anticpated everything. Including a moment like this. It took me a while to figure them out, but I know all 3 of your tricks.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: '...'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck',
                speech: 'So- so what now? Are you getting rid of one of us? Which one?'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'Well... I don\'t think that\'s my decision to make, is it?'
            }, {
                portrait: 'sam_sad',
                speech: 'Sam turns to face George.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'George, you have to do this. You\'ve been our leader from the start, so I think this falls on you.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'I... I\'m sorry.'
            }, {
                portrait: 'george_sad',
                speech: 'Sam hands George a small pouch with 4 pieces of paper, a friend\'s trick written down on each one.'
            }, {
                speech: 'Which will you read?',
                choice1: {
                    img: 'portrait_bob_sad',
                    callback: () => {
                        console.log('bob');
                    }
                },
                choice2: {
                    img: 'portrait_chuck_sad',
                    callback: () => {
                        console.log('chuck');
                    }
                },
                choice3: {
                    img: 'portrait_sam_sad',
                    callback: () => {
                        console.log('sam');
                    }
                }
            }, {
                end: true
            }
        ]

        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x262b44).setOrigin(0);
        this.add.sprite(game.config.width/2, game.config.height/2, 'bg_cave');

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