class Pendulum{
    constructor(x,y,color)
    {
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia: Infinity
        }
        this.x=x;
        this.y=y;
        this.color=color;
        
        this.body=Bodies.rectangle(this.x,this.y,40,40,options);
        World.add(world,this.body);
    }
    display()
    {
        var angle=this.body.angle;
        var position=this.body.position;
        push();
        translate(position.x,position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0,0,200,200);
        pop();
    }
}