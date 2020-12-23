class Tree{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 950, 385, this.width, this.height);
    }
}