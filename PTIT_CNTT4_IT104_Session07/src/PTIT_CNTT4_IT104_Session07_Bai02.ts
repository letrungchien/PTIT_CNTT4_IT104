class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:number

    constructor(name:string,speed:number=0,id:number){
        this.id=id,
        this.name=name,
        this.speed=speed
    }
   slowDown(speed:number){
      return this.speed=this.speed-speed;
    }
    speedUp(speed:number){
        return this.speed=this.speed+speed;
    }
  showSpeed(){
    console.log(`toc do hien tai ${this.speed}`);
  }
}

class Bicycle extends Vehicle{
   private gear:number;
   constructor(id:number,name:string,speed:number,gear:number){
    super(name,speed,id),
    this.gear=gear
   }
   showInfo(){
    console.log(`Id :${this.id} Name: ${this.name} Speed: ${this.speed} Gear:${this.gear }`);
   }
}
let bike=new Bicycle(1,"xe dap",7,4);

bike.showSpeed();
bike.speedUp(10);
bike.showSpeed();
bike.slowDown(2);
bike.showInfo();
