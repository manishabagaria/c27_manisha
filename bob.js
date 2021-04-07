class Bob {
    constructor(x,y){
      var option={
          isStatic:false
      }
      this.body=Bodies.circle(x,y,27,option)
      this.radius=27
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        fill("red")
        ellipse(pos.x,pos.y,this.radius)
    }
}