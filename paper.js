class paper{
    constructor(x,y){
      var option ={
        isStatic =false,
        restitution = 0.3,
        friction  = 0,
        density = 1.2
      }  
      this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
		
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.paperWidth, this.paperHeight)

    
    }

      keyPressed(){
      if (keyCode === UP_ARROW){
        Matter.body.applyForce(paperObject.body,paperObject.body.position(x=130,y=-145))
      }

     
    }
