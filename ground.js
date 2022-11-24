class Ground 
{
  constructor(x, y, w, h, a) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle = a;
    World.add(world, this.body);
  }
  display(){
    Matter.Body.rotate(this.body,this.angle)
    push();
     translate(this.body.position.x,this.body.position.y);
     rotate(this.angle);
     rect(0,0,100,20);
     pop();
     
     this.angle +=0.1;
  }

 
   
}
