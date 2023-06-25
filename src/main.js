let config = {
    width:  1920,
    height: 1080,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, Shooter, Switcher],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};

let game = new Phaser.Game(config);