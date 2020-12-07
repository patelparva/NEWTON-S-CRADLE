class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var Option = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
   
        this.rope = Matter.Constraint.create(Option);
        World.add(world,this.rope);
       }

       display(){
           var bodyA = this.rope.bodyA.position;
           var pointB = this.rope.bodyB.position;
        
           strokeWeight(2);
           line(bodyA.x,bodyA.y,pointB.x + this.offsetX, pointB.y + this.offsetY);
           
       }
   }