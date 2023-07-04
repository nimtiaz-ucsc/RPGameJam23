class Player extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'george');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.5)

        scene.events.on('update', this.update, this)

        this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.health = 3;
        this.isFloating = false;
        this.body.setGravityY(gravity);
    }

    update() {
        this.body.setVelocityX(0);
        this.body.setGravityY(gravity);
        this.isFloating = false;

        this.keyW.on('down', () => {
            if (this.body.touching.down) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

        this.keySPACE.on('down', () => {
            if (this.body.touching.down) {
                this.body.setVelocityY(jumpSpeed);
            }
        });

        if ((this.keyW.isDown || this.keySPACE.isDown) && this.body.velocity.y > 0) {
            this.isFloating = true;
            this.body.setGravityY(gravity * floatMultiplierY);
        }

        if (this.keyA.isDown && this.x >= this.body.width/2) {
            if (!this.isFloating) {
                this.body.setVelocityX(moveSpeed * -1);
            } else {
                this.body.setVelocityX(moveSpeed * -1 * floatMultiplierX);
            }
        }

        if (this.keyS.isDown) {
            this.body.setGravityY(gravity * fastfallMultiplier);
        }

        if (this.keyD.isDown && this.x <= game.config.width - this.body.width/2) {
            if (!this.isFloating) {
                this.body.setVelocityX(moveSpeed);
            } else {
                this.body.setVelocityX(moveSpeed * floatMultiplierX)
            }
        }

    }




}