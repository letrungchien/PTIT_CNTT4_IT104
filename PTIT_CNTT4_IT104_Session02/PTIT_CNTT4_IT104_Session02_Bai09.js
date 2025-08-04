function getStudentSummary(student) {
    const { listMonhoc } = student;
    let sum = 0;
    for (let i = 0; i < listMonhoc.length; i++) {
        sum += listMonhoc[i].score;
    }
    let tb = (sum / listMonhoc.length).toFixed(2);
    let scoreSort = listMonhoc.sort((a, b) => a.score - b.score);
    let max = scoreSort[listMonhoc.length - 1]
    let min = scoreSort[0];
    console.log(`${student.name} is ${student.age} years old`);
    if (tb >= 8.5) {
        console.log(`Average score : ${tb} -> hoc sinh gioi`);
    } else if (tb >= 7) {
        console.log(`Average score : ${tb} -> hoc sinh kha`);
    } else if (tb >= 5) {
        console.log(`Average score :${tb} -> hoc sinh trung binh`);
    } else {
        console.log(`Average score :${tb} -> hoc sinh yeu`);
    }
    console.log(`Best subiect : ${max.subiect} (${max.score})`);
    console.log(`Weakest subiect : ${min.subiect} (${min.score})`);
}
const student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        { subiect: "Math", score: 9 },
        { subiect: "English", score: 7.5 },
        { subiect: "Physics", score: 6 },
        { subiect: "Literature", score: 8.5 }
    ]
}
getStudentSummary(student);