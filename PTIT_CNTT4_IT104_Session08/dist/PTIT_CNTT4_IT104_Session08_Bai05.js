function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            console.log(arr[i]);
            return;
        }
    }
    console.log("undefined");
}
array([1, 2, 3]);
array(["a", "b", "c"]);
