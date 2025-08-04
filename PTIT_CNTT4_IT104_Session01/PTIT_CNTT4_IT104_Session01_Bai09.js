function mergeArr(arr1=[],arr2=[]) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    arr1.sort();
    return console.log(arr1);
}
mergeArr([1,2,3,5,9],[4,6,7,8]);