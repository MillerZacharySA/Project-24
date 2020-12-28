class Ground{
    constructor(x,y){
        this.ground = Bodies.rectangle(x,y,1600,20,{isStatic: true});
        World.add(world,this.ground);
    }

    display(){
        push();
        rectMode(CENTER);
        fill(255,255,255);
        rect(this.ground.position.x,this.ground.position.y,1600,20);
        pop();
    }
}