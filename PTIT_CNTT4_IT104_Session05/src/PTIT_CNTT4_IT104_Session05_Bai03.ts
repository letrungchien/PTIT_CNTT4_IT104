class Employee {
    public name:string;
    private phone:string;
    protected company:string;
    constructor(name:string,phone:string,company:string) {
        this.name=name,
        this.company=company,
        this.phone=phone
    }
    printinfo(){
        console.log(`Name : ${this.name} Company : ${this.company}  Phone :${this.phone}`);
    }
   
}

let employee=new Employee("Nguyen Van a","TNHH","09763734");
employee.printinfo();