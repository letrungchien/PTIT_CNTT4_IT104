function checkElement(arr=[],a) {
    if (arr.includes(a)) {
        console.log("true");
    }else{
        console.log("false");
    }
}
checkElement([1,2,3,4,5,6],3);
checkElement([1,2,3,4,5,6],8);