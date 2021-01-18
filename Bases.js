class Base
{
    constructor(x,y,width,height)
    {
        var properties = {
            'isStatic': true,
            'restitution': 0.8,
            'density': 0.7,
            'friction': 0.7
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, properties);
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}