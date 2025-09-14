function getDataFromAPI1() {
    return new Promise((res,reject )=>{
     setTimeout(()=>{
        console.log("lay data tu API1 thang cong");
        res();
     },1000)
    })
}
function getDataFromAPI2() {
    return new Promise((res,reject )=>{
     setTimeout(()=>{
        console.log("lay data tu API2 thang cong");
        res();
     },1000)
    })
}
function getDataFromAPI3() {
    return new Promise((res,reject )=>{
     setTimeout(()=>{
        console.log("lay data tu API3 thang cong");
        res();
     },1000)
    })
};

async function runAllTask(){
  
 try {
 await getDataFromAPI1();
   await getDataFromAPI2();
    await getDataFromAPI3();
 } catch(error){
    console.log("error",error);
    
 }
}
 runAllTask();