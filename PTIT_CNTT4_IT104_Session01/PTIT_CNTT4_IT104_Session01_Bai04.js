const checkParity=(a)=>{
    if (typeof a!=="number"||isNaN(a)) {
        return console.log(`${a} is not a number`);
        ;
    }
   if(a%2==0){
      return console.log(`${a} is an even number`);
      ;
   }else{
      return console.log(`${a} is an odd number`);
      ;
   }
};
checkParity("a");
checkParity(1);
checkParity(2);
