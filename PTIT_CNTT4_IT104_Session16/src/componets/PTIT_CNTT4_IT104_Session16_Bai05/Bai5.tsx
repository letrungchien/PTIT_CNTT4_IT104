import React, { Component } from 'react'

type Student = {
  name: string,
  email: string,
  age: number | null
}
type State = {
  student: Student,
  error: string
  isCheck: boolean
}
export default class Bai5 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      student: { name: "", email: "", age: null },
      error: "",
      isCheck: false
    }
  }
  handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    const { name, email, age } = this.state.student;
    if (name === "" || email === "" || age === null) {
      this.setState({ error: "khong duoc de trong thong tin", isCheck: false });
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      this.setState({ error: "email khong hop le", isCheck: false });
      return;
    }
    if (age < 0) {
      this.setState({ error: "tuoi khong duoc am", isCheck: false });
      return;
    }
    this.setState({ error: "", isCheck: true });
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      student: {
        ...this.state.student,
        [name]: name === "age" ? Number(value) : value
      }
    });
  }
  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="name" placeholder='ho ten' onChange={this.handleChange} /><br />
       <input type="email" name="email" placeholder='email' onChange={this.handleChange} /><br />
       <input type="number" name="age" placeholder='tuoi' onChange={this.handleChange} /><br />
          <button onClick={this.handleSend}>gui</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="reset">xoa tat ca</button>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}

    
        {this.state.isCheck && (
          <div>
        <p>Ho va ten : {this.state.student.name}</p>
        <p>Email : {this.state.student.email}</p>
          <p>Tuoi: {this.state.student.age}</p>
          </div>
        )}
      </div>
    )
  }
}
