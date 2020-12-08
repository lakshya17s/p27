class Rope{
    constructor(a,b,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var options = {
         
            bodyA :a,
            bodyB:b,
           
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
display(){
  var PosA = this.rope.bodyA.position;
  var PosB = this.rope.bodyB.position;
  var A1X = PosA.x;
  var A1Y = PosA.y;

  var A2X = PosB.x+this.offsetX;
  var A2Y = PosB.x+this.offsetY;
  line(A1X,A1Y,A2X,A2Y);


}

        
    };
