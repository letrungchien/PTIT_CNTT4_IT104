class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(` kich thuc chieu rong ${this.width} chieu cao ${this.height}`);
    }
}
let rectangle = new Rectangle("hinh chu nhat", 2, 3);
console.log(rectangle.getName());
rectangle.getSize();
