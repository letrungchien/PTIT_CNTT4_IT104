class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name :${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name),
            this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}  Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name),
            this.subject = subject;
    }
    displayInfo() {
        console.log(` Name : ${this.name}  Subject :${this.subject}`);
    }
}
let student = new Student(1, "chien");
let teacher = new Teacher("thay Hai", "frontend");
student.displayInfo();
teacher.displayInfo();
