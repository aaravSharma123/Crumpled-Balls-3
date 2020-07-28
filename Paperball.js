class Paperball{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.7,
        friction:1,
        density:1.2,
        
      }
      this.image = loadImage("paper.png");
      // line 12 creates the ball  
      this.body = Bodies.circle(x,y,radius,options);
      this.body.scale = 0.5;
      
      this.radius = radius;
      World.add(world, this.body);
      
    }
    display(){
        var pos =this.body.position 
        
        //this line will display the image "paper.png"
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,60,60);
        
       
        //ellipseMode(RADIUS);
        //fill("pink");
        //ellipse(pos.x, pos.y, this.radius, this.radius);
        //ellipse(pos1.x, pos1.y, this.radius, this.radius);
      }
}