class Dustbin{
    constructor(x1,y1,x2,y2,x3,y3){
        this.wall1 = Bodies.rectangle(x1,y1,20,50,{isStatic: true});
        World.add(world,this.wall1);
        this.wall2 = Bodies.rectangle(x2,y2,20,50,{isStatic: true});
        World.add(world,this.wall2);
        this.ground = Bodies.rectangle(x3,y3,50,20,{isStatic: true});
        World.add(world,this.ground);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(255,255,255);
        rect(this.ground.position.x,this.ground.position.y,112.5,20);
        rect(this.wall1.position.x,this.wall1.position.y,20,100);
        rect(this.wall2.position.x,this.wall2.position.y,20,100);
        pop();
    }
}