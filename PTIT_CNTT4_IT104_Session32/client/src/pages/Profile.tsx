<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
      const result:any = useSelector((data:any)=>{
        console.log("data",data);
        return data.profile.user;
    })
  return (
    <div>
        <h1>Bài 1</h1>
         <b>Thông tin cá nhân</b>
        <p>Id:{result.id}</p>
         <p>Họ và tên :{result.userName}</p>
          <p>Giới tính:{result.gender}</p>
           <p>Ngày sinh:{result.dateBirth}</p>
            <p>Địa chỉ:{result.address}</p> 
            
    </div>
  )
}
=======
import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
      const result:any = useSelector((data:any)=>{
        console.log("data",data);
        return data.profile.user;
    })
  return (
    <div>
        <h1>Bài 1</h1>
         <b>Thông tin cá nhân</b>
        <p>Id:{result.id}</p>
         <p>Họ và tên :{result.userName}</p>
          <p>Giới tính:{result.gender}</p>
           <p>Ngày sinh:{result.dateBirth}</p>
            <p>Địa chỉ:{result.address}</p> 
            
    </div>
  )
}
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
