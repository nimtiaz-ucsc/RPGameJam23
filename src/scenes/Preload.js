class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('george', 'assets/george/BigGeorgeBody.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('aim', 'assets/george/BigGeorgeAimArm.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('projectile', 'assets/george/BigGeorgeProjectile.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});

        this.load.atlas('georgeSprite', './assets/george/georgeAtlas.png', './assets/george/georgeAtlas.json');

        this.load.image('sky', 'assets/bg/sky.png');
        this.load.spritesheet('sun', 'assets/bg/sun.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds1', 'assets/bg/clouds1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds2', 'assets/bg/clouds2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass1', 'assets/bg/grass1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass2', 'assets/bg/grass2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('dirt', 'assets/bg/dirt.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
    }

    create() {
        // george anims
        this.anims.create({
            key: 'georgeRun',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'run',
                start: 0,
                end: 7,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'georgeSquat',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'squat',
                start: 0,
                end: 2,
                zeroPad: 1
            }),
            frameRate: 30,
            repeat: 0
        });

        this.anims.create({
            key: 'georgeRise',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'rise',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'georgeFallTransition',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'fallTransition',
                start: 0,
                end: 0,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'georgeFall',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'fall',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'georgeFloatTransition',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'floatTransition',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'georgeFloat',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'float',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'georgeFloatFallTransition',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'floatFallTransition',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'georgeLand',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'land',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: 0
        });

        // bg anims
        this.anims.create({
            key: 'sun_anim',
            frames: this.anims.generateFrameNumbers('sun', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'clouds1_anim',
            frames: this.anims.generateFrameNumbers('clouds1', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'clouds2_anim',
            frames: this.anims.generateFrameNumbers('clouds2', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'grass1_anim',
            frames: this.anims.generateFrameNumbers('grass1', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });
        

        this.anims.create({
            key: 'grass2_anim',
            frames: this.anims.generateFrameNumbers('grass2', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'dirt_anim',
            frames: this.anims.generateFrameNumbers('dirt', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });






        this.scene.start('prefabTest');
    }
}