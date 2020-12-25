class Paper{
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
    var options={
     isStatic: false,
     restitution: 0.3,
     friction: 0.5,
     density: 1.2,
    }


