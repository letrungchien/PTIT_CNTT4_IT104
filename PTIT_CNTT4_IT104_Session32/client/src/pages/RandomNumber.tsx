<<<<<<< HEAD
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function RandomNumber() {
    const result:any = useSelector((data:any) => {
        console.log(data);
        return data.ranDom.arrNumberRandom;
    })

    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({ type: "RANDOM" });
    }   

  return (
    <div>
        <h1>Bài 4</h1>
        <p>[{result.join(",")}]</p>
        <button onClick={handleRandom}>Random</button>
    </div>
  )
}
=======
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function RandomNumber() {
    const result:any = useSelector((data:any) => {
        console.log(data);
        return data.ranDom.arrNumberRandom;
    })

    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({ type: "RANDOM" });
    }   

  return (
    <div>
        <h1>Bài 4</h1>
        <p>[{result.join(",")}]</p>
        <button onClick={handleRandom}>Random</button>
    </div>
  )
}
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
