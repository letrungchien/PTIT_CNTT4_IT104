import React from,{useReducer} 'react'

export default function Bai8() {
      const initState = {
         name:"",
         email:""
    };
  return (
    <div>
        <h3>User information form</h3>
        <label htmlFor="">ten</label><br />
        <input type="text" onChange={handleName} />
        <label htmlFor="">Email</label> <br/>
        <input type="text" onChange={handleEmail}/>
    </div>
  )
}
