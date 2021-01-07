class Ground{
constructor (x,y,width,height){
var GroundOptions= {
isStatic: true

}

this.body = Bodies.rectangle(x,y,width,height,GroundOptions)
this.width=width
this.height=height

World.add (myworld,this.body)


}

display(){
    var pos = this.body.position
    fill("red")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)


}










}