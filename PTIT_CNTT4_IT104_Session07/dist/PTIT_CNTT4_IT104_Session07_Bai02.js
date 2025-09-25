class Vehicle {
    constructor(name, speed = 0, id) {
        this.id = id,
            this.name = name,
            this.speed = speed;
    }
    slowDown(speed) {
        return this.speed = this.speed - speed;
    }
    speedUp(speed) {
        return this.speed = this.speed + speed;
    }
    showSpeed() {
        console.log(`toc do hien tai ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(id, name, speed, gear) {
        super(name, speed, id),
            this.gear = gear;
    }
    showInfo() {
        console.log(`Id :${this.id} Name: ${this.name} Speed: ${this.speed} Gear:${this.gear}`);
    }
}
let bike = new Bicycle(1, "xe dap", 7, 4);
bike.showSpeed();
bike.speedUp(10);
bike.showSpeed();
bike.slowDown(2);
bike.showInfo();
