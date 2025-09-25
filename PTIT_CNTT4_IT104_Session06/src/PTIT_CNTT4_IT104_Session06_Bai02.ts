abstract class Job {
    type:string;
    constructor(type:string){
        this.type=type;
    }
    printType(){
        console.log(`cong viec ${this.type}`);
    }
    abstract calculateSalary():number;
}

class PartTimeJob extends Job{
    workingHour:number;
    constructor(type:string ,workingHour:number){
        super(type);
        this.workingHour=workingHour;
    }
    calculateSalary():number{
        return this.workingHour*30000;
    }
}
class FullTimeJob extends Job{

    constructor(type:string){
    super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
let partTime=new PartTimeJob("part time",8);
partTime.printType();
console.log(`Tien luong la : ${partTime.calculateSalary()}`);
let fullTime=new FullTimeJob("fullTime");
fullTime.printType();
console.log(`tien luong la ${fullTime.calculateSalary()}`);
