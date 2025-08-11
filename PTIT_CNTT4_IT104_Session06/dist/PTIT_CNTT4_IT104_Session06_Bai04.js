class Cricle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * 3.14;
    }
    calculatePerimeter() {
        return 2 * this.radius * 3.14;
    }
}
class Rectangle1 {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    calculateArea() {
        return this.width * this.heigth;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.heigth);
    }
}
let cricle = new Cricle(6);
console.log(`Dien tich hinh tron ${cricle.calculateArea()}`);
console.log(`Chu vi hinh tron ${cricle.calculatePerimeter}`);
let rectangle1 = new Rectangle1(4, 7);
console.log(`dien tich hinh chu nhat ${rectangle1.calculateArea()}`);
console.log(`chu vi hinh chu nhat ${rectangle1.calculatePerimeter()}`);
