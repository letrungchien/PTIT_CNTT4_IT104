<<<<<<< HEAD
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/slice/ranDom';

export default function RanDom() {
    const reslut = useSelector((data:any) => {
        return data.random.arr
    });
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(random())
    }
    return (
    <div>
      <h1>Bài 2</h1>
      <p>[{reslut.join(",")}]</p>
      <button onClick={handleClick}>Random</button>
    </div>
  )
=======
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/slice/ranDom';

export default function RanDom() {
    const reslut = useSelector((data:any) => {
        return data.random.arr
    });
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(random())
    }
    return (
    <div>
      <h1>Bài 2</h1>
      <p>[{reslut.join(",")}]</p>
      <button onClick={handleClick}>Random</button>
    </div>
  )
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}