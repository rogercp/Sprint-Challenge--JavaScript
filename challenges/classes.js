// 1. Copy and paste your prototype in here and refactor into class syntax.


class otherCuboid{
    constructor(attrs){
    this.length=attrs.length;
    this.width=attrs.width;
    this.height=attrs.height;
  }
  volume(){
    console.log(this.length*this.height*this.width);
  }
  surfaceArea(){
    console.log(2*((this.width*this.length) + (this.height*this.length) + (this.width * this.height)));
  }
}
const otherNewObj= new Cuboid({
    "length":4,
    "width":5,
    "height":5
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
 otherNewObj.volume(); // 100
 otherNewObj.surfaceArea(); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.