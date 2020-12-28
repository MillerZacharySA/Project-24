class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r/2,options);

        World.add(world,this.body)
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        rectMode(CENTER) 
        strokeWeight(3); 
        fill(255,0,255); 
        ellipse(posx,posy,this.r, this.r);
        pop();
    }
}