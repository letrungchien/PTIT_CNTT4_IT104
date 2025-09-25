class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`cong viec ${this.type}`);
    }
}
class PartTimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FullTimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
let partTime = new PartTimeJob("part time", 8);
partTime.printType();
console.log(`Tien luong la : ${partTime.calculateSalary()}`);
let fullTime = new FullTimeJob("fullTime");
fullTime.printType();
console.log(`tien luong la ${fullTime.calculateSalary()}`);
