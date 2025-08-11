class Student {
    private id:number;
    private name:string;
    constructor(id:number,name:string) {
        this.id=id,
        this.name=name
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
}

let allStudent:Student[]=[];
class Classroom{
    students:Student[]=[];
    printStudent(){
        for (let i = 0; i < this.students.length; i++) {
            console.log(`Id:${this.students[i].getId()} Name: ${this.students[i].getName()}`);
        }

    }
    addStudent(student:Student){
        this.students.push(student);
    }
    filterStudent(id:number){
        let check=-1;
        for (let i = 0; i < this.students.length; i++) {
            
            if(this.students[i].getId()===id){
                console.log(`Id:${this.students[i].getId()} Name: ${this.students[i].getName()}`);
                check++;
            }
        }
        if (check===-1) {
            console.log(`khong tim thay id`);
            
        }
    }
    addStudentInClass(id:number){
        let check=-1;
        for (let i = 0; i < allStudent.length; i++) {
            if (allStudent[i].getId()===id) {
                this.students.push(allStudent[i]);
                allStudent.splice(i,1);
                check++;
                return;
            }
            if (check==-1) {
                console.log("khong tim thay id ");
                return;
            }
            
        }
    }
}
allStudent.push(new Student(1,"An"),new Student(2,"Anh"),new Student(3,"Y"),new Student(4,"Hi"),new Student(5,"Ki"),new Student(6,"Ly"));
let classA=new Classroom();
let classB=new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

classA.printStudent();
classB.printStudent();