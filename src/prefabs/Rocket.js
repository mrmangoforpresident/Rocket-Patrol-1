//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame); 

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false; //track rocket's firing status
        this.moveSpeed = 2; //pixels per frame movement speed

        this.sfxRocket = scene.sound.add('sfx_rocket');// rocket sfx
    }

    update(){
        //left and right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x>= borderUISize + this.width){
                this.x -= this.moveSpeed;
            }
            else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    //puts Rocket back on the 'ground'
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}