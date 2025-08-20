import React, { Component } from 'react'
 type ListPost ={
   id:number;
   title:string;
   content:string;
   author:string;
 };
 type DetailPost={
    post:ListPost[];
 };

export default class Exercises06 extends Component <object,DetailPost>{
    constructor(props:object){
        super(props)
        this.state={
            post:[
                {id:1,title:"tai sao nen hoc reactjs",content:"hoc de di lam ",author:"Tuan",},
                 {id:2,title:"tai sao nen hoc reactjs",content:"hoc de di lam ",author:"Tuan",},
                  {id:3,title:"tai sao nen hoc reactjs",content:"hoc de di lam ",author:"Tuan",},
            ]
        }
    }
  render() {
    return (
      <div>{this.state.post.map((item,index)=>
        <div key={index}>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Content: {item.content}</p>
            <p>Author: {item.author}</p>
        </div>
    )}</div>
    )
  }
}
