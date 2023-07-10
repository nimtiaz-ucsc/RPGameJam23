class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('george', 'assets/BigGeorgeBody.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('aim', 'assets/BigGeorgeAimArm.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('projectile', 'assets/BigGeorgeProjectile.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});

        this.load.atlas('georgeSprite', './assets/georgeAtlas.png', './assets/georgeAtlas.json');
    }

    create() {

        this.anims.create({
            key: 'georgeRun',
            frames: this.anims.generateFrameNames('georgeSprite', {
                prefix: 'run',
                start: 0,
                end: 7,
                zeroPad: 1
            }),
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
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
            frameRate: 10,
            repeat: 0
        });





        this.scene.start('prefabTest');
    }
}