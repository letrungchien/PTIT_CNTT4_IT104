import React, { Component } from 'react'
  type Student={
    name:string;
    email:string;
    password:string;
    sdt:string;
  }
  type Students={
    students:Student[];
    current:Student;
  }
export default class Bai7 extends Component <object,Students>{
  constructor(props:object){
    super(props)
    this.state={
      students:JSON.parse(localStorage.getItem("students")||"[]"),
       current: {name:"",email:"",password:"",sdt:"",},
      
    }

  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const {current,students} = this.state;
     console.log(this.state.students);
     
  if (
    current.name.trim() === "" ||
    current.email.trim() === "" ||
    current.password.trim() === "" ||
    current.sdt.trim() === ""
  ) {
    alert("Không được để trống thông tin");
    return;
  }
  for (let i = 0; i < students.length; i++) {
  if (students[i].email === current.email) {
    alert("Email đã tồn tại");
    return;
  }
}
  const updated = [...this.state.students, current];
  this.setState({
    students: updated,
    current: { name: "", email: "", password: "", sdt: "" },
  });

  localStorage.setItem("students", JSON.stringify(updated));
  alert("Đăng ký thành công");
};

  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       const{name,value}=e.target;
       this.setState({current:{...this.state.current,[name]:value}})
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h3>Dang ky tai khoan</h3>
            <label htmlFor="">Ten sinh vien</label><br />
            <input type="text" name='name' onChange={this.handleChange} value={this.state.current.name}/><br />
            <label htmlFor="">Email</label><br />
            <input type="text" name='email' onChange={this.handleChange} value={this.state.current.email}/>  <br />
            <label htmlFor="">Mat khau</label><br />
            <input type="text" name='password' onChange={this.handleChange} value={this.state.current.password}/><br />
            <label htmlFor="">so dien thoai</label><br />
            <input type="text" name='sdt' onChange={this.handleChange} value={this.state.current.sdt}/><br /><br />
            <button>Dang ky tai khoan</button>
        </form>
      </div>
    )
  }
}
