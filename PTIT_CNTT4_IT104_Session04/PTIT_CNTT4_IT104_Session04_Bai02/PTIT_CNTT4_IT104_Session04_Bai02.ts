let students:number[]=[7.8,6.8,9,5,7,8,9.3,7.5,8.1,6.7];
let sum:number=0;
for (let i = 0; i < students.length; i++) {
   sum=students[i]+sum;
}
let tb=(sum/students.length).toFixed(2);
console.log(tb);

