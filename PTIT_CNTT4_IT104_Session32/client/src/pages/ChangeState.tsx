<<<<<<< HEAD
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const result = useSelector((data:any) => {
        return data.change.say
    });
    const dispath = useDispatch()
    const handleClick = () => {
        dispath({type:"SAY"})
    }
  return (
    <div>
        <h1>Bài 5</h1>
      {result}
      <button onClick={handleClick}>ChangeState</button>
    </div>
  )
=======
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const result = useSelector((data:any) => {
        return data.change.say
    });
    const dispath = useDispatch()
    const handleClick = () => {
        dispath({type:"SAY"})
    }
  return (
    <div>
        <h1>Bài 5</h1>
      {result}
      <button onClick={handleClick}>ChangeState</button>
    </div>
  )
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}