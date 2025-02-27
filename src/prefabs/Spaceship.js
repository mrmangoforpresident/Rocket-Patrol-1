//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add object to existing scene
        this.points = pointValue; 
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update(){
        //move spaceship left: 
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    //reset position
    reset(){
        this.x = game.config.width;
    }
}