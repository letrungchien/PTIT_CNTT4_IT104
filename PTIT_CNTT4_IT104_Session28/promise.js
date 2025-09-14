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

function runAllTask(){
    getDataFromAPI1()
    .then(()=>getDataFromAPI2())
    .then(()=> getDataFromAPI3())
    .then(()=>console.log("tat ca da dc hoan thanh"))
    .catch((error)=>{
        console.log("loi",error);
        
    })
}

runAllTask()