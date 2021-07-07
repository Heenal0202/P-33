class Snow{
    constructor(x,y){

        var options={
            'restitution':0.8,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y,20, options);
        this.r = 20;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,this.r, this.r);
        pop();
      }
}