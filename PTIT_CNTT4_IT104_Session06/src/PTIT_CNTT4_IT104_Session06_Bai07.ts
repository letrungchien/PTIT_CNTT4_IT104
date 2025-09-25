class Student1 {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName: string) {
        this.name = newName;
    }
}

let allStudent1: Student1[] = [];

class Classroom1 {
    students: Student1[] = [];

    printStudent() {
        if (this.students.length === 0) {
            console.log("ko tim thay");
            return;
        }
        for (let i = 0; i < this.students.length; i++) {
            console.log(`Id: ${this.students[i].getId()} - Name: ${this.students[i].getName()}`);
        }
    }

    addStudentInClass(id: number) {
        for (let i = 0; i < allStudent1.length; i++) {
            if (allStudent1[i].getId() === id) {
                this.students.push(allStudent1[i]);
                allStudent1.splice(i, 1);
                return;
            }
        }
        console.log("khong tim tahy id");
    }

    removeStudent(id: number) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].getId() === id) {
                allStudent1.push(this.students[i]);
                this.students.splice(i, 1);
                return;
            }
        }
        console.log("khong tim thay id");
    }

    editStudent(id: number, newName: string) {
        for (let i=0;i<this.students.length;i++) {
            if (this.students[i].getId() === id) {
                this.students[i].setName(newName);
                return;
            }
        }
        console.log("khong tim thay id");
    }
}


allStudent1.push(
    new Student1(1, "An"),
    new Student1(2, "Anh"),
    new Student1(3, "Y"),
    new Student1(4, "Hi"),
    new Student1(5, "Ki"),
    new Student1(6, "Ly")
);

let _classA = new Classroom1();
let _classB = new Classroom1();

_classA.addStudentInClass(1);
_classA.addStudentInClass(2);
_classA.addStudentInClass(3);
_classB.addStudentInClass(4);
_classB.addStudentInClass(5);
_classB.addStudentInClass(6);

_classA.printStudent();
_classB.printStudent();

_classA.removeStudent(2);


_classB.editStudent(5, "Kiet");


_classA.printStudent();
_classB.printStudent();


