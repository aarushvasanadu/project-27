class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            density:1.0,
            restitution:0.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body)
    }

    display(){
        ellipseMode (RADIUS)
        fill ('red')
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
    

}