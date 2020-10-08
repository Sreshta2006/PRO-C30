class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
        push(); 
      var pos =this.body.position;
      rectMode(CENTER);
      fill(154, 173, 67);
      rect(pos.x, pos.y, this.width, this.height);
    
    pop();
    }
  };
  