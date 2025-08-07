let student = [];
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    student.push(newStudent);
}
addStudent(1, "hong", 20, [{ subjectName: "C", score: 8 }]);
addStudent(2, "hyng", 20, [{ subjectName: "A", score: 9 }]);
function printstudent() {
    for (let i = 0; i < student.length; i++) {
        console.log(`thong tin sinh vien thu: ${student[i].id} : Name ${student[i].name}`);
    }
}
function updateStudent(id) { }
function deleteStudent(id) { }
