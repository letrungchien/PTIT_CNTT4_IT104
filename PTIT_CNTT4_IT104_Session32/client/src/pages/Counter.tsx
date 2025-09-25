import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function Counter() {
    const result:any = useSelector(data=>{
        console.log("data");
        return data.counter
    })
     const dispatch = useDispatch()
    const increment = () => {
        dispatch({
            type:"INCREMENT"
        })
    }
    const reduce= () => {
      dispatch({
        type:"REDUCE"
      })
    }
  return (
    <div>
      <h1>Bài 3</h1>
      <p>{result.count}</p>
      <button onClick={increment}>Tăng</button> <button onClick={reduce}>Giảm</button>
    </div>
  )
}