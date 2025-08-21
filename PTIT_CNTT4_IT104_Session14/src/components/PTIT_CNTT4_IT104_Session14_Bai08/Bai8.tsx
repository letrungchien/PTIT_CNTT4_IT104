import React, { Component } from 'react'
type InitState={
    email:string;
    password:string;
}
export default class Bai8 extends Component <object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (this.state.email===""||this.state.password==="") {
            alert("khong duoc de trong thong tin");
            return
        }
        const data=localStorage.getItem("students")
        let students=JSON.parse(data);
          for (let i = 0; i < students.length; i++) {
           if(students[i].email===this.state.email&&students[i].password===this.state.password){
            alert("dang nhap thanh cong");
            return;
           }
            
          }
          alert("dang nhap that bai");
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value}=e.target;
     this.setState({[name]:value})
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h3>Dang nhap</h3>
            <label htmlFor="">Email</label><br />
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/> <br />
            <label htmlFor="">Password</label> <br />
            <input type="text" name='password' value={this.state.password} onChange={this.handleChange}/> <br />
            <button>Dang nhap</button>
        </form>
      </div>
    )
  }
}
