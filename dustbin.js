class Dustbin {
     constructor(x, y, width, height) {
          var options = { 
            'isStatic':true, 
            restitution:0.4, 
            friction:0.5,
            density:1.1 
            
        } 
   // this.dustbin = loadImage('dustbin.png');

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    } 
        
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

        fill("white");
      // image(this.dustbin, 600, 600, 150, 130);
      rect(0,0,this.width,this.height);
        pop();
        } 
    };