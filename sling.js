class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 500
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        World.add(world, this.sling);

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(this.pointX,this.pointY,pointB.x,pointB.y);
        pop();
    }
    
}
