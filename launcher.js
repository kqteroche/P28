class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB

        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }
    
    fly(){
        this.Launcher.bodyA = null;
    }

    display(){
        if(this.Launcher.bodyA){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
        
      strokeWeight(3);
      line(pointA.x + 40, pointA.y, pointB.x -10, pointB.y);
        }
        
    }
}
       
    