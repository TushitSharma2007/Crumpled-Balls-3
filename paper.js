class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.5});
        this.radius=radius
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        
        fill(128,0,128);
        circle(pos.x,pos.y,this.radius);
        
    }
}