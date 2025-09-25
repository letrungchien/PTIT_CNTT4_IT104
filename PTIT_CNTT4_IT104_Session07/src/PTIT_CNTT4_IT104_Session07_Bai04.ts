abstract class Person{
    name:string;
    constructor(name:string){
        this.name=name
    }
    displayInfo(){
        console.log(`Name :${this.name}`);
    }
}

class Student extends Person{
    id:number;
    constructor(id:number,name:string){
        super(name),
        this.id=id
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}  Name: ${this.name}`);
    }
}
class Teacher extends Person{
    subject:string;
    constructor(name:string,subject:string){
        super(name),
        this.subject=subject
    }
    displayInfo(): void {
        console.log(` Name : ${this.name}  Subject :${this.subject}`);  
    }
}

let student=new Student(1,"chien");
let teacher=new Teacher("thay Hai","frontend");
student.displayInfo();
teacher.displayInfo();