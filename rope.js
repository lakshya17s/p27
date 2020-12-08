// class Rope{
//     constructor(a,b,offsetX,offsetY){
//         this.offsetX = offsetX;
//         this.offsetY = offsetY;
        
//         var options = {
         
//             bodyA :a,
//             bodyB:b,
           
//             pointB:{x:this.offsetX,y:this.offsetY},
//         }
//         this.rope = Constraint.create(options);
//         World.add(world, this.rope);
//         }
// display(){
//   var PosA = this.rope.bodyA.position;
//   var PosB = this.rope.bodyB.position;
//   var A1X = PosA.x;
//   var A1Y = PosA.y;

//   var A2X = PosB.x+this.offsetX;
//   var A2Y = PosB.x+this.offsetY;
//   line(A1X,A1Y,A2X,A2Y);


// }

        
//     };
 class Rope{
        constructor(a,b, offsetX, offsetY)
        {
            this.offsetX=offsetX
            this.offsetY=offsetY
            var options={
                bodyA:a,
                bodyB:b,
                pointB:{x:this.offsetX, y:this.offsetY}
            }
            //console.log(options);
            this.rope=Constraint.create(options)
            World.add(world,this.rope)
        }
    
        display()
        {
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
    
            strokeWeight(2);
    
            var Anchor1X=pointA.x
            var Anchor1Y=pointA.y
    
            var Anchor2X=pointB.x+this.offsetX
            var Anchor2Y=pointB.y+this.offsetY
    
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
    
    }
