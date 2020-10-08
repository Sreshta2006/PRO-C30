class Box2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(45, 169, 188);
      rect(pos.x, pos.y, this.width, this.height);
        }else{
          push();
          World.remove(world,this.body)
          this.visibility=this.visibility-9
        tint(255,this.visibility)
        pop();
        }
    }
  };
  