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
                speech: 'You\'re kidding, right? That took FOREVER. But I guess I can\'t complain now. Whatever is in there better be worth it, or I swear--'
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
                speech: 'Okay, this has to be it. If we just crawl through this nook over here...'
            }, {
                speech: 'The group ducks down into a small opening, and find themselves standing in a massive hollowed-out chamber, with a tall ceiling and several flat stone platforms.'
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
                speech: 'Of course Solveig can understand you. Solveig is no primitive. And Solveig is no threat to you either. Hee-hee!'
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
                speech: 'Well hello, Solveig! My name is George. Big George. But George for short. Feel free to call me whatever\'s works for you.'
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
                speech: 'We should probably get down to business. We came here for a reason.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam',
                speech: 'Solveig, are you the one who can give anyone the power to make a fourth friend? Is it true?'
            }, {
                portrait: 'solveig',
                speech: 'Solveig\'s eyes perk up at the mention of the fourth friend, and for a brief moment a glint of mischievousness flickers across their face.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee hee-hee hee! Yes! Yes! Yes-yes-yes! You come looking for more friends, yes! Hee hee! Solveig and Solveig\'s friends can surely help you with this!'
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
                frame: 'cave',
                speech: 'The bones appear to be very weathered down to the point of falling apart. If our heroes had noses, they would be able to smell the awful stench of rotted flesh mixed into the damp air of the cave.'
            }, {
                frame: 'cave',
                speech: 'It\'s impossible to tell how long Solveig has kept these skeletons lying around.'
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
                speech: 'George... I- *hrk!* I think you need to- *hrk!*'
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
                speech: 'George takes a moment to steel himself. If they turned back now, all that they endured on this quest would be for nothing. And they would be of no help for the people back at home fending for their lives against all those Foamy bugs.'
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
                speech: 'Are you KIDDING ME?! This is RIDICULOUS! You\'re asking George to solve one of our tricks? He doesn\'t even know--'
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
                portrait: 'chuck_sad',
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
                speech: 'I had to be prepared. We had no idea what this journey would entail. So I anticpated the worst. Including something like this. It took me a while to figure them out, but I know all of your tricks.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob',
                speech: 'This... this is a joke, right?'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob_sad',
                speech: '...Right?'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck_sad',
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
                speech: 'Sam hands George a small pouch with 3 pieces of paper, a friend\'s trick written down on each one.'
            }, {
                speech: 'Which will you read?',
                choice1: {
                    img: 'bob_choice',
                    callback: () => {
                        //
                    }
                },
                choice2: {
                    img: 'chuck_choice',
                    callback: () => {
                        this.dialog.index = 88
                    }
                },
                choice3: {
                    img: 'sam_choice',
                    callback: () => {
                        this.dialog.index = 96;
                    }
                }
            }, { // choose bob ---------------------
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'I\'m sorry Bob... but I think I have to pick you.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob_sad',
                speech: 'Wh-what? Come on, George. You can\'t be serious. I\'m just as much a part of this team as anyone else!'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'I\'m really sorry...'
            }, {
                portrait: 'george_sad',
                speech: 'George unfurls the paper with Bob\'s name written on it, and reads what it says.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Oh... I didn\'t realize it was that easy... We could have done this on accident!'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob_sad',
                speech: 'George, please...'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Bob... hold out your left hand.'
            }, {
                portrait: 'george_sad',
                speech: 'The two perform their secret handshake, but with their non-dominant hands. What was once a longstanding tradition between them to signify their bond, was now being used to break it.'
            }, {
                portrait: 'bob_sad',
                speech: 'Once it\'s over, the two former friends stand across from each other wistfully.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob_sad',
                speech: 'Well... that\'s that I guess...',
                next: 104
            }, { // choose chuck ---------------------
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'I\'m sorry Chuck... but I think I have to--'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck_sad',
                speech: 'Yeah? Yeah. Sure. Let\'s get this over with.'
            }, {
                portrait: 'george_sad',
                speech: 'George unfurls the paper with Chuck\'s name written on it, and reads what it says.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Heh. That\'s cute.'
            }, {
                portrait: 'chuck_sad',
                speech: 'Chuck turns around and crouches down, allowing George access to his headband.'
            }, {
                portrait: 'george_sad',
                speech: 'George steps up and takes the tails of the headband, and ties them into a neat little bow on the back of Chuck\'s head.'
            }, {
                portrait: 'george_sad',
                speech: 'Chuck\'s headband was a gift from George, just as George\'s sunglasses were a gift from Chuck, going back all the way to their childhood. An especially bittersweet choice for a trick.'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck_sad',
                speech: 'Hmph. After everything we\'ve been through together... Doesn\'t matter. Go talk to that thing.',
                next: 104
            }, { // choose sam --------------------
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'I\'m sorry Sam, but I think I have to pick you.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'I understand. It\'s for the best. I\'m sorry you had to choose.'
            }, {
                portrait: 'george_sad',
                speech: 'George unfurls the paper with Sam\'s name written on it, and reads what it says.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Huh. No wonder you never let anyone near it.'
            }, {
                portrait: 'george_sad',
                speech: 'George puts a hand up to Sam\'s forehead, and begins to polish her ring. He swabs his woolly hand back and forth until it practically sparkles.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Wow... I\'ve never seen it so shiny before.'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'Yeah... no one\'s ever had to polish it...'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: 'But it\'s fine. Don\'t let this go to waste, George.'
            }, { // continue here ---------------
                portrait: 'george_sad',
                speech: 'George walks back up to Solveig, determined to finish this quest once and for all.'
            }, {
                speaker: 'Big George',
                portrait: 'george_sad',
                speech: 'Okay Solveig, I guess we can be friends now. So... can you give me a fourth friend?'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee-hee hee hee-hee! Yes, yes. Solveig will give you what you want. Approach Solveig.'
            }, {
                frame: 'kill1',
                speech: 'Solveig\'s wrinkly, ancient hand emerges from their long flowing hair, and is slowly raised above George\'s head.'
            }, {
                speaker: 'Buff Chuck',
                frame: 'kill1',
                speech: 'Something about this feels off.'
            }, {
                speaker: 'Lanky Sam',
                frame: 'kill1',
                speech: 'Yeah, you\'re right... '
            }, {
                speaker: 'Tiny Bob',
                frame: 'kill1',
                speech: 'Should we do someth--'
            }, {
                frame: 'kill1',
                speech: 'Suddenly, Solveig brings their hand down...'
            }, {
                frame: 'kill2',
                speech: '...and their long claws slash straight through the soft woolly body.'
            }, {
                frame: 'kill2',
                speech: 'Chunks of wool go flying across the cave, and Solveig pounces on the remains of what was once Big George, tearing through whatever is left.'
            }, {
                speaker: 'Tiny Bob',
                portrait: 'bob_sad',
                speech: '...!'
            }, {
                speaker: 'Buff Chuck',
                portrait: 'chuck_sad',
                speech: '...!'
            }, {
                speaker: 'Lanky Sam',
                portrait: 'sam_sad',
                speech: '...!'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Something you should know about Solveig, Solveig has a secret power, but Solveig\'s secret power is not what you thought. Hee.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Solveig has the power to spread lies around the world. Hee-hee. Solveig likes to see the chaos Solveig\'s lies create. Hee!'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Normally Solveig\'s lies are untraceable, but every once in a while Solveig will create one tiny thread that leads people like you back to Solveig. Hee-hee hee!'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Solveig likes having friends, but one small problem. Hee-hee! Solveig\'s trick is when someone traces one of Solveig\'s rumors back to Solveig.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee hee-hee hee! Like this one here. Hee! Solveig could not be friends with him, so Solveig got rid of him.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'And Solveig\'s secret power must remain secret.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'So you all must go too.'
            }, {
                speaker: 'Solveig',
                portrait: 'solveig',
                speech: 'Hee hee.'
            }, {
                frame: 'kill1',
                speech: 'Solveig rushes Tiny Bob, overwhelming him immediately.'
            }, {
                frame: 'kill2',
                speech: 'One down.'
            }, {
                frame: 'kill1',
                speech: 'Solveig then cuts off Lanky Sam as she tries to escape.'
            }, {
                frame: 'kill2',
                speech: 'Two down.'
            }, {
                frame: 'kill1',
                speech: 'Buff Chuck manages to put up a fight, his mastery of the Steel Wool technique coming in handy.'
            }, {
                frame: 'kill1',
                speech: 'But it isn\'t enough.'
            }, {
                frame: 'kill2',
                speech: 'Three down.'
            }, {
                speech: 'The cave is filled with silence. Solveig sits alone among the aftermath; cotton bits scattered across the floor.'
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