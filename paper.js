class Paper { 
    constructor(x, y, r) { 
        var options = { 
        'isStatic':false,
        restitution:0.01,
        friction:0.1, 
        density:1.02 
    }

    this.paper = loadImage('paper.png');
    
        this.radius = r; 
        this.body = Bodies.circle(x, y, r, options);
            
        World.add(world, this.body);
               }
             
 display(){
    var pos =this.body.position;
    var angle = this.body.angle;
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("black"); 

        fill("pink"); 
        image(this.paper, 0, 0, this.radius, this.radius);
        pop(); 
    }
             };