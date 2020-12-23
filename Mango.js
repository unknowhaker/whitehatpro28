class Mango{
    constructor(x,y,radius){
        this.body = Matter.Bodies.circle(x,y,radius,{isStatic: true, restitution:0, friction: 1, density:1.2});
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        //fill("red"),
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}