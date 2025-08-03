const sumArray=(...arrays)=>{
     const newArr=arrays.map(arr=>arr.reduce((sum,num) =>sum+num,0));
     return console.log(newArr);
     
}
sumArray([1,2],[6,7,8],[12,8]);