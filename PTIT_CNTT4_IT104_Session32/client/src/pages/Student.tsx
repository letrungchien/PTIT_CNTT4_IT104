import React from 'react'
import { useSelector } from 'react-redux'
export default function Student() {
     const result:any = useSelector((data:any)=>{
        console.log("data",data);
        return data.student.users;
    })
  return (
    <div>
     <h1>Bài 2</h1>
       <table style={{borderCollapse: "collapse",  border:"1px solid black" }} >
        <thead>
             <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                 <th style={{ border: "1px solid black", padding: "8px" }}>Tên</th>
                     <th style={{ border: "1px solid black", padding: "8px" }}>Giới tính</th>
                         <th style={{ border: "1px solid black", padding: "8px" }}>Ngày sinh</th>
                             <th style={{ border: "1px solid black", padding: "8px" }}>Địa chỉ</th>
                                 <th style={{ border: "1px solid black", padding: "8px" }}>Chức năng</th>
                           
        </thead>
      </table>
      <tbody>
        {result.map((item,index)=>(
            <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{item.id}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{item.userName}</td>
                      <td style={{ border: "1px solid black", padding: "8px" }}>{item.gender}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{item.dateBirth}</td>
                          <td style={{ border: "1px solid black", padding: "8px" }}>{item.address}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                <button>Sửa</button><button>Xóa</button>
                            </td>

            </tr>
        ))}
      </tbody>
       <div>
        {result.map((item,i)=>(
            <p key={i}>{item.name}</p>
        ))}
       </div>
    </div>
  )
}
