type Subject={
    subjectName:string,
    score:number|string
}
type Student={
    id:number,
    name:string,
    age:number,
    subject:Subject
}
let student:Student[]=[];
function addStudent(id:number,name:string,age:number,subject:Subject[]) {
    const newStudent={
        id:id,
        name:name,
        age:age,
        subject:subject
    }
    student.push(newStudent);
}
addStudent(1,"hong",20,[{subjectName:"C",score:8}]);
addStudent(2,"hyng",20,[{subjectName:"A",score:9}]);
function printstudent():void{
    for (let i = 0; i < student.length; i++) {
        console.log(`thong tin sinh vien thu: ${student[i].id} : Name ${student[i].name}`);
    }
}
function updateStudent(id:number){
    let index:number=-1;
    for (let i = 0; i < student.length; i++) {
        if (student[i].id===id) {
            index=i;
            break;
        }
    }
    if(index===-1){
        console.log("khong tim thay id");
    }else{
 student[index].name=prompt("nhap ten moi");
 student[index].age=+prompt("nhap tuoi moi");
    }
}
function deleteStudent(id:number){
    
}
