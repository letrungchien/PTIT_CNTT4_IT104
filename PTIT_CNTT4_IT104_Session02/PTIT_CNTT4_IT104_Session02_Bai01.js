function sumArr(arr=[]) {
    let sum =0;
    for(let number of arr){
      if (number%2===0) {
        sum += number;
      }
    }
    return sum;  
}
console.log( sumArr([1,2,3,4,5,6]));
