class Log extends BaseClass 
{
    constructor(xpos,ypos,height,angle)
    {
       super(xpos,ypos,20,height,angle)
       this.image = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body,angle)
    }


}