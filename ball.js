class Ball{
    constructor(x,y,r){
       this.body = Bodies.circle(x,y,r);
       this.r = r;
       World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}