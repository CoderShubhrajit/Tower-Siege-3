class Polygon
{
    constructor(x,y)
    {
        var properties = {
            'isStatic': false,
            'restitution': 0.8,
            'density': 0.7,
            'friction': 0.7
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 50, 50, properties);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display()
    {
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        /*rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);*/
        pop();
    }
}