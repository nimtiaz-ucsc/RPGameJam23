let config = {
    width:  1080,
    height: 720,
    backgroundColor: '0xFFFFFF',
    scene: [Preload, MainMenu, Switcher, Scene1, Level1],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let keyCodes = {
    W: Phaser.Input.Keyboard.KeyCodes.W,
    A: Phaser.Input.Keyboard.KeyCodes.A,
    S: Phaser.Input.Keyboard.KeyCodes.S,
    D: Phaser.Input.Keyboard.KeyCodes.D,
    SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE
}

let ally = "chuck";

let moveSpeed = 500;
let jumpSpeed = -750;
let gravity = 1000;
let floatMultiplierX = 0.5;
let floatMultiplierY = 0.1;
let fastfallMultiplier = 3;

let iframeTime = 100;
let invincibleTime = 1000;

let playerHealthBuff = 0;
let enemyHealthBuff = 0;

let projectileSpeed = 1000;
let fireRate = 500;

let fireRateBuff = 0;
let enemySpeedBuff = 0;

let spawnChanceMin = 1;
let spawnChanceMax = 3;
let spawnRate = 1000;

let enemyFireRate = 1500;

let basePoints = 100;

let bgSpeed = 3;

let game = new Phaser.Game(config);