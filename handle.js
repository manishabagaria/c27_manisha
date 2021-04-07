class Handle {
    constructor(x,y){
      var option={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,400,20,option)
      this.width=400
      this.length=20
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill("skyblue")
        rect(pos.x,pos.y,this.width,this.length)
    }
}