

function askForPhoneNumber(callback){
    let phoneNumber;
    console.log("anh goi cho duy xin so");
    console.log("duy doi mk ty");
    setTimeout(()=>{
        console.log("tim thay roi ");
        phoneNumber=12344
        callback(phoneNumber)
        
    },3000);
}
function processPhoneNumber(sdt) {
    console.log(`anh goi cho nhung theo so ${sdt}`);
    
}


askForPhoneNumber(processPhoneNumber);


