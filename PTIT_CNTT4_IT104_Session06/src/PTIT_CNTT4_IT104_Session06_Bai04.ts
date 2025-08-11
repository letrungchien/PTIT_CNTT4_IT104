interface Geometry {
    calculateArea():number;
    calculatePerimeter():number;
}
class Cricle implements Geometry{
    private radius:number;
    constructor(radius:number){
        this.radius=radius;
    }
   calculateArea(): number {
       return this.radius*this.radius*3.14;
   }
   calculatePerimeter(): number {
       return 2*this.radius*3.14;
   }

}
class Rectangle1 implements Geometry{
    private width:number;
    private heigth:number;
    constructor(width:number,heigth:number){
        this.width=width;
        this.heigth=heigth
    }
    calculateArea(): number {
        return this.width*this.heigth;
    }
    calculatePerimeter(): number {
        return 2*(this.width+this.heigth);
    }
}
let cricle=new Cricle(6);
console.log(`Dien tich hinh tron ${cricle.calculateArea()}`);
console.log(`Chu vi hinh tron ${cricle.calculatePerimeter}`);
let rectangle1=new Rectangle1(4,7);
console.log(`dien tich hinh chu nhat ${rectangle1.calculateArea()}`);
console.log(`chu vi hinh chu nhat ${rectangle1.calculatePerimeter()}`);

