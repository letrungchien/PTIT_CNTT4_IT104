function processInput(input: number | string | boolean) {
    if (typeof input === "string") {
      if (/^\d+$/.test(input)) {
        const num =Number(input);
        console.log(num*num);
        
      }else{
        const letters =input.match(/[a-z A-Z]/g);
        const count =letters?letters.length:0;
        console.log(`${count} ky tu chu cai`);
        
      }
    } else if (typeof input === "number") {
        if(input<2){
            console.log("khong phai so nguyen to");
            return;
        }
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if(input % i===0){
            console.log("khong phai so nguyen to");
            return;
        }
    }
    console.log("day so nguyen to");
    
    } else if (typeof input === "boolean") {
        if(input){
            console.log("tien hanh xu ly");
        }else{
           console.log("dung xu ly");   
        }
    } else {
        console.log("khong dinh dang duoc");
    }
}
processInput("123abc");
processInput("21");
processInput(5);
processInput(true);