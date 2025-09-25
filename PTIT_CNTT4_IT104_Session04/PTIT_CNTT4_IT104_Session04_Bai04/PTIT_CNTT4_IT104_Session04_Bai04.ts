function handleUnionType(a: number | string):void{
    if (typeof a === "string") {
        console.log(`${a.length} ky tu`);
    } else if (typeof a === "number") {
        if (a % 2 == 0) {
            console.log("Day la so chan");
        } else {
            console.log("Day la so le");
        }
    } else {
        console.log("Dinh dang khong ho le");
    }
}
handleUnionType("chien");
handleUnionType(2);
handleUnionType(3);