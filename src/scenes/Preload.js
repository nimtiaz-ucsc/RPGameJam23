class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.image('title_george', './assets/title_george.png');
        this.load.image('title_bob', './assets/title_bob.png');
        this.load.image('title_chuck', './assets/title_chuck.png');
        this.load.image('title_sam', './assets/title_sam.png');

        this.load.atlas('george_sprite', './assets/george/georgeAtlas.png', './assets/george/georgeAtlas.json');
        this.load.spritesheet('george_aim', './assets/george/aim.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 3});
        this.load.spritesheet('george_projectile', './assets/george/projectiles.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1});

        this.load.spritesheet('enemy1_bob', './assets/enemy/enemy1_bob.png', {frameWidth: 120, frameHeight: 100, startFrame: 0, endFrame: 3});
        this.load.spritesheet('enemy1_chuck', './assets/enemy/enemy1_chuck.png', {frameWidth: 120, frameHeight: 100, startFrame: 0, endFrame: 3});
        this.load.spritesheet('enemy1_sam', './assets/enemy/enemy1_sam.png', {frameWidth: 120, frameHeight: 100, startFrame: 0, endFrame: 3});

        this.load.spritesheet('enemy2_bob', './assets/enemy/enemy2_bob.png', {frameWidth: 140, frameHeight: 100, startFrame: 0, endFrame: 3});
        this.load.spritesheet('enemy2_chuck', './assets/enemy/enemy2_chuck.png', {frameWidth: 140, frameHeight: 100, startFrame: 0, endFrame: 3});
        this.load.spritesheet('enemy2_sam', './assets/enemy/enemy2_sam.png', {frameWidth: 140, frameHeight: 100, startFrame: 0, endFrame: 3});

        this.load.spritesheet('enemy3_bob', './assets/enemy/enemy3_bob.png', {frameWidth: 192, frameHeight: 100, startFrame: 0, endFrame: 7});
        this.load.spritesheet('enemy3_chuck', './assets/enemy/enemy3_chuck.png', {frameWidth: 192, frameHeight: 100, startFrame: 0, endFrame: 7});
        this.load.spritesheet('enemy3_sam', './assets/enemy/enemy3_sam.png', {frameWidth: 192, frameHeight: 100, startFrame: 0, endFrame: 7});

        this.load.image('projectile_bob', './assets/projectiles/projectile_bob.png');
        this.load.spritesheet('explosion_bob', './assets/projectiles/explosion_bob.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 5});
        this.load.image('projectile_chuck', './assets/projectiles/projectile_chuck.png');
        this.load.spritesheet('explosion_chuck', './assets/projectiles/explosion_chuck.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 5});
        this.load.image('projectile_sam', './assets/projectiles/projectile_sam.png');
        this.load.spritesheet('explosion_sam', './assets/projectiles/explosion_sam.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 5});
        this.load.image('projectile_enemy', './assets/projectiles/projectile_enemy.png');
        this.load.spritesheet('explosion_enemy', './assets/projectiles/explosion_enemy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 5});

        this.load.image('sky1', './assets/bg/sky1.png');
        this.load.image('sky2', './assets/bg/sky2.png');
        this.load.image('sky3', './assets/bg/sky3.png');
        this.load.image('bg_cave', './assets/bg/cave.png');
        this.load.spritesheet('sun', './assets/bg/sun.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('sunset', './assets/bg/sunset.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('moon', './assets/bg/moon.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds1', './assets/bg/clouds1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('clouds2', './assets/bg/clouds2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass1', './assets/bg/grass1.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('grass2', './assets/bg/grass2.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
        this.load.spritesheet('dirt', './assets/bg/dirt.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});

        this.load.image('portrait_bob', './assets/portraits/bob.png');
        this.load.image('portrait_bob_sad', './assets/portraits/bob_sad.png');
        this.load.image('portrait_chuck', './assets/portraits/chuck.png');
        this.load.image('portrait_chuck_sad', './assets/portraits/chuck_sad.png');
        this.load.image('portrait_george', './assets/portraits/george.png');
        this.load.image('portrait_george_sad', './assets/portraits/george_sad.png');
        this.load.image('portrait_sam', './assets/portraits/sam.png');
        this.load.image('portrait_sam_sad', './assets/portraits/sam_sad.png');
        this.load.image('portrait_dsd', './assets/portraits/dsd.png');
        this.load.image('portrait_dsd_silhouette', './assets/portraits/dsd_silhouette.png');
        this.load.image('portrait_solveig', './assets/portraits/solveig.png');
        this.load.image('portrait_solveig_silhouette', './assets/portraits/solveig_silhouette.png');

        this.load.image('bob_choice', './assets/portraits/bob_sad_choice.png');
        this.load.image('chuck_choice', './assets/portraits/chuck_sad_choice.png');
        this.load.image('sam_choice', './assets/portraits/sam_sad_choice.png');

        this.load.image('artifact_health', './assets/artifact_health.png');
        this.load.image('artifact_speed', './assets/artifact_speed.png');

        this.load.image('attack', './assets/frames/attack.png');
        this.load.image('blueprint', './assets/frames/blueprint.png');
        this.load.image('cave', './assets/frames/cave.png');
        this.load.image('village', './assets/frames/village.png');
        this.load.image('portal_sunset', './assets/frames/portal_sunset.png');
        this.load.image('shop_sunset', './assets/frames/shop_sunset.png');
        this.load.image('portal_night', './assets/frames/portal_night.png');
        this.load.image('shop_night', './assets/frames/shop_night.png');
        this.load.image('trick_bob', './assets/frames/trick_bob.png');
        this.load.image('trick_chuck', './assets/frames/trick_chuck.png');
        this.load.image('trick_sam', './assets/frames/trick_sam.png');
        this.load.image('kill1', './assets/frames/kill1.png');
        this.load.image('kill2', './assets/frames/kill2.png');
        this.load.image('village_foam', './assets/frames/village_foam.png');
        this.load.image('glasses', './assets/frames/glasses.png');

        this.load.spritesheet('dialog_continue', './assets/dialog_continue.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});

        this.load.spritesheet('switcher', './assets/switcher.png', {frameWidth: 200, frameHeight: 200, startFrame: 0, endFrame: 3});

        this.load.spritesheet('how_to', './assets/how_to_play.png', {frameWidth: 1024, frameHeight: 720, startFrame: 0, endFrame: 1});
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

        // enemy anims
        this.anims.create({
            key: 'enemy1_bob_anim',
            frames: this.anims.generateFrameNumbers('enemy1_bob', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });
        
        this.anims.create({
            key: 'enemy1_chuck_anim',
            frames: this.anims.generateFrameNumbers('enemy1_chuck', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy1_sam_anim',
            frames: this.anims.generateFrameNumbers('enemy1_sam', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy2_bob_anim',
            frames: this.anims.generateFrameNumbers('enemy2_bob', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });
        
        this.anims.create({
            key: 'enemy2_chuck_anim',
            frames: this.anims.generateFrameNumbers('enemy2_chuck', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy2_sam_anim',
            frames: this.anims.generateFrameNumbers('enemy2_sam', {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy3_bob_anim',
            frames: this.anims.generateFrameNumbers('enemy3_bob', {start: 0, end: 7, first: 0}),
            frameRate: 12,
            repeat: -1
        });
        
        this.anims.create({
            key: 'enemy3_chuck_anim',
            frames: this.anims.generateFrameNumbers('enemy3_chuck', {start: 0, end: 7, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy3_sam_anim',
            frames: this.anims.generateFrameNumbers('enemy3_sam', {start: 0, end: 7, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        // projectile anims
        this.anims.create({
            key: 'explode_bob',
            frames: this.anims.generateFrameNumbers('explosion_bob', {start: 0, end: 5, first: 0}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'explode_chuck',
            frames: this.anims.generateFrameNumbers('explosion_chuck', {start: 0, end: 5, first: 0}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'explode_sam',
            frames: this.anims.generateFrameNumbers('explosion_sam', {start: 0, end: 5, first: 0}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'explode_enemy',
            frames: this.anims.generateFrameNumbers('explosion_enemy', {start: 0, end: 5, first: 0}),
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
            key: 'sunset_anim',
            frames: this.anims.generateFrameNumbers('sunset', {start: 0, end: 1, first: 0}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'moon_anim',
            frames: this.anims.generateFrameNumbers('moon', {start: 0, end: 1, first: 0}),
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

        this.anims.create({
            key: 'continue_anim',
            frames: this.anims.generateFrameNumbers('dialog_continue', {start: 0, end: 7, first: 0}),
            frameRate: 18,
            repeat: -1
        });

        this.anims.create ({
            key: 'switch', 
            frames: this.anims.generateFrameNumbers('switcher', {start: 0, end: 3, first: 0}),
            frameRate: 0,
            repeat: 0
        })
        
        this.anims.create ({
            key: 'how_to_anim', 
            frames: this.anims.generateFrameNumbers('how_to', {start: 0, end: 1, first: 0}),
            frameRate: 0,
            repeat: 0
        })


        this.scene.start('mainMenu');
    }
}