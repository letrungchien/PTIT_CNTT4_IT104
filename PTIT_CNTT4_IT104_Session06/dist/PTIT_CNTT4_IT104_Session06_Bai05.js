class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp(speed) {
        return this.speed += speed;
    }
    slowDown(speed) {
        return this.speed - speed;
    }
    stop() {
        return this.speed = 0;
    }
}
let car = new Vehicle();
console.log(`van toc xe ${car.speedUp(50)}km/h`);
console.log(`van toc xe ${car.slowDown(20)}km/h`);
console.log(`van toc xe ${car.stop()}km/m xe  dung`);
