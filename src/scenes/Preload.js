class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('george', 'assets/george/proto/BigGeorgeBody.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('aim', 'assets/george/proto/BigGeorgeAimArm.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});
        this.load.spritesheet('projectile', 'assets/george/proto/BigGeorgeProjectile.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 0});

        this.load.atlas('george_sprite', './assets/george/georgeAtlas.png', './assets/george/georgeAtlas.json');
        this.load.spritesheet('george_aim', './assets/george/aim.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 3});
        this.load.spritesheet('george_projectile', './assets/george/projectiles.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1});

        this.load.image('sky', 'assets/bg/sky.png');
        this.load.spritesheet('sun', 'assets/bg/sun.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds1', 'assets/bg/clouds1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds2', 'assets/bg/clouds2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass1', 'assets/bg/grass1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass2', 'assets/bg/grass2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('dirt', 'assets/bg/dirt.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});

        this.load.image('portrait1', 'assets/portrait1.png');
        this.load.image('portrait2', 'assets/portrait2.png');
        this.load.image('portrait3', 'assets/portrait3.png');
        this.load.image('portrait4', 'assets/portrait4.png');
    }

    create() {
        // george anims
        this.anims.create({
            key: 'georgeRun',
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
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
            frames: this.anims.generateFrameNames('george_sprite', {
                prefix: 'land',
                start: 0,
                end: 1,
                zeroPad: 1
            }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'aim_anim',
            frames: this.anims.generateFrameNumbers('george_aim', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'projectile_anim',
            frame: this.anims.generateFrameNumbers('george_projectile', {start: 0, end: 1, end: 0}),
            frameRate: 12,
            repeat: -1
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






        this.scene.start('dialogTest');
    }
}