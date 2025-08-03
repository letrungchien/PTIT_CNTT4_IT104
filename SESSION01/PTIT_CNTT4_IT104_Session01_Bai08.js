function mergeArr(arr1=[],arr2=[],k) {
    if (k<0||k>arr1.length) {
        return console.log("Vi tri khong hop le");
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.splice(k+i,0,arr2[i]);
    }
    return console.log(arr1);
}

mergeArr([1,2,3,7,8],[4,5,6],3);