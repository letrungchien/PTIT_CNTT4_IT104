function longStr(str) {
    const words = str.split(/\s+/);
    let long = "";
    for (let i = 0; i < words.length; i++) {
        let check = -1;
        let item = words[i].split("").sort((a, b) => a.localeCompare(b));
        for (let j = 0; j < item.length; j++) {
            if (item[j] == item[j + 1]) {
                check++;
                break;
            }
        }
        if (check == -1 && words[i].length > long.length) {
            long = words[i];
        }
    }
    return long;
}
let string = "hello world apple banana orange pumpkin cucumber";
console.log(longStr(string));
