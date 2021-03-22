class Bob{
    constructor(x,y){
    var prop={
        density:0.2,
        restitution:1.2
    }
    this.body=Bodies.circle(x,y,60,prop)
    World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,60)
    }
}