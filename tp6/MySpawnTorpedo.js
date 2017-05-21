/**
 * MyTorpedo
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//Receive this from submarine
function MySpawnTorpedo(scene,x,y,z, hor_angle, ver_angle) {
    CGFobject.call(this, scene);
    this.x=x;
    this.z=z;
    this.y=y;
    this.ver_angle=ver_angle;
    this.hor_angle=hor_angle;
    
    this.torpedo = new MyTorpedo(this.scene,this.z,this.y,this.x,this.hor_angle,this.ver_angle);
};

MySpawnTorpedo.prototype = Object.create(CGFobject.prototype);
MySpawnTorpedo.prototype.constructor = MyTriangle;
MySpawnTorpedo.prototype.display = function() {
	 this.scene.pushMatrix();
     	this.scene.scale(1,1,1);
        this.scene.translate(this.torpedo.x, this.torpedo.y, -this.torpedo.z);
        this.scene.rotate(this.torpedo.ver_angle,0, 1, 0);
	    this.scene.rotate(this.torpedo.hor_angle,1, 0, 0);
	
        //this.scene.rotate(Math.PI+this.torpedo.getHBezier(), 0, 1, 0);
        //this.scene.rotate(this.torpedo.getVBezier(), 1, 0, 0);
        this.torpedo.display();
    this.scene.popMatrix();
	
};
MySpawnTorpedo.prototype.update = function(currTime){
    var bool = this.torpedo.update(currTime);
}