interface ChangeSpeed{
    speedUp(speed:number);
    slowDown(speed:number);
    stop();
}
class Vehicle implements ChangeSpeed{
    private speed:number;
    constructor(speed:number=0){
        this.speed=speed;
    }
    speedUp(speed: number) {
        return this.speed +=speed;
    }
    slowDown(speed: number) {
        return this.speed -speed;
    }
    stop() {
        return this.speed=0;
    }
}
let car =new Vehicle();
console.log(`van toc xe ${car.speedUp(50)}km/h`);
console.log(`van toc xe ${car.slowDown(20)}km/h`);
console.log(`van toc xe ${car.stop()}km/m xe  dung`);
