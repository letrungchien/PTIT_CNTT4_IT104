<<<<<<< HEAD
function getDataFromIPI1(callback){
  setTimeout(()=>{
console.log("lay data API1 thang cong");

    callback();
  },1000);
}
function getDataFromIPI2(callback){
setTimeout(()=>{
console.log("lay data API2 thang cong");
    callback();
  },1000);
}
function getDataFromIPI3(callback){
setTimeout(()=>{
    console.log("lay data API3 thang cong");
    console.log("tat ca du lieu lay tren server thanh cong");
    
  },1000);
}

function runAllTask(){
    getDataFromIPI1(()=>{
         getDataFromIPI2(()=>{
          getDataFromIPI3();
    });
    });
};
=======
function getDataFromIPI1(callback){
  setTimeout(()=>{
console.log("lay data API1 thang cong");

    callback();
  },1000);
}
function getDataFromIPI2(callback){
setTimeout(()=>{
console.log("lay data API2 thang cong");
    callback();
  },1000);
}
function getDataFromIPI3(callback){
setTimeout(()=>{
    console.log("lay data API3 thang cong");
    console.log("tat ca du lieu lay tren server thanh cong");
    
  },1000);
}

function runAllTask(){
    getDataFromIPI1(()=>{
         getDataFromIPI2(()=>{
          getDataFromIPI3();
    });
    });
};
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
runAllTask();