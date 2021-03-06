class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.04,
            length:200
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(4)
        var anchor1x = pointA.x 
        var anchor1y= pointA.y 
        var anchor2x = pointB.x + this.offsetX
        var anchor2y = pointB.y + this.offsetY
        line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
}