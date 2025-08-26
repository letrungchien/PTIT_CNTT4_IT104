import React, { useState } from 'react'

export default function Bai1() {
    const [name,setName]=useState<string>("Le Trung Chien");
  return (
    <div>
       <h2>Ho va ten : {name}</h2>
    </div>
  )
}
