const user={
    name:"John",
    age:25,
    location:{
        city:"Ha Noi",
        country:"Vietnam",
    },
    contact:{
        email:"John@gmail.com",
        phone:"01234567",
    },
    job:{
        title:"Developer",
        company:"Tech Corp",
    },
}

function displayUserInfo(user){
    const {
         name,
         age,
         location:{city,country},
         contact={},
         job={}
    }=user;
      const   {
            email="unknown",
            phone="unknown"
         }=contact;
         const{
            title="unknown",
            company="unknown"
         }=job;

  return console.log(`${name} is ${age} years old, lives in ${city},${country} works as ${title} at ${company} and can be contacted via ${email} of ${phone}`);
}
displayUserInfo(user);
displayUserInfo({name:"Anna" ,age:30,location:{city:"Da Nang",country:"Vietnam",},});