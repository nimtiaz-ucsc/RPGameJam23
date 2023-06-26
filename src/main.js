let config = {
    width:  1080,
    height: 720,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, Shooter, Switcher],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};

let keyW, keyA, keyS, keyD, keySPACE;

let moveSpeed = 500;
let jumpSpeed = -750;
let gravity = 1000;

let projectileSpeed = 1000;
let fireRate = 500;

let spawnRate = 500;

let game = new Phaser.Game(config);