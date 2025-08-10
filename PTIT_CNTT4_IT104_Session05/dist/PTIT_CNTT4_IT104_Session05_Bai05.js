class Rectangle {
    constructor(width, height) {
        this.width = width,
            this.height = height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    area() {
        return this.height * this.width;
    }
    setWidth(width) {
        return this.width = width;
    }
    setHeight(height) {
        return this.height = height;
    }
}
let rectangle = new Rectangle(3, 7);
console.log("Dien tich :", rectangle.area());
console.log("Chu vi :", rectangle.perimeter());
rectangle.setHeight(5);
rectangle.setWidth(2);
console.log("Dien tich :", rectangle.area());
console.log("Chu vi :", rectangle.perimeter());
