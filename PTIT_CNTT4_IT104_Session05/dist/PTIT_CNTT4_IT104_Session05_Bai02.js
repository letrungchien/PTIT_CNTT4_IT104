class Student {
    constructor(id, age, email) {
        this.id = id,
            this.age = age,
            this.email = email;
    }
    print() {
        console.log(`ID: ${this.id}  Tuoi:${this.age}  Email: ${this.email}`);
    }
}
let st1 = new Student(1, 23, "anh@gmail.com");
let st2 = new Student(2, 24, "binh@gmail.com");
let st3 = new Student(3, 25, "thu@gmail.com");
let students = [];
students.push(st1, st2, st3);
for (let i = 0; i < students.length; i++) {
    students[i].print();
}
