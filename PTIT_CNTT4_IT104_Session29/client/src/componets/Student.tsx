import axios from "axios";
import React, { useEffect, useState } from "react";
type DataStudent = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function Student() {
  const [studentData, setStudentData] = useState<any>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tele, setTele] = useState("");
  const [show,setShow]=useState(false);
  async function getAllStudent() {
    let student = await axios("http://localhost:8080/students");
    console.log(student.data);
    setStudentData(student.data);
  }

  async function getStudentById(id: number) {
    let res = await axios("http://localhost:8080/students");
    let studentId = res.data.find((i: { id: number }) => i.id === id);
    if (studentId) {
      console.log(`id : ${studentId.id}`);
    } else {
      console.log("khong tim thay id ");
    }
  }

  useEffect(() => {
    getAllStudent();
    getStudentById(3);
  }, []);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleTele = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTele(e.target.value);
  };

  async function addStudentNew(studentNew: any) {
    let student = await axios.post(
      "http://localhost:8080/students",
      studentNew
    );
    return student.data;
  }
  const handleShow=()=>{
    {show?setShow(false):setShow(true)}
  }
  const addStudent = async () => {
    const newStudent = await addStudentNew({
      student_name: name,
      email: email,
      address: address,
      phone: tele,
      status: true,
      created_at: "2025-10-15",
    });
    setStudentData([...studentData, newStudent]);
    setName("");
    setAddress("");
    setEmail("");
    setTele("");
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    setStudentData(studentData.filter((student: DataStudent) => student.id !== id));
  };

  return (
    <div>
      <div >
        {show?
        <div >
        <h1>them sinh vien</h1>
        <input
          type="text"
          placeholder="nhap ten"
          onChange={handleName}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="nhap email"
          onChange={handleEmail}
          value={email}
        />
        <br />
        <input
          type="text"
          placeholder="nhap que quan"
          onChange={handleAddress}
          value={address}
        />
        <br />
        <input
          type="text"
          placeholder="nhap sdt"
          onChange={handleTele}
          value={tele}
        />
        <br />
        <button className="bg-blue-400" onClick={addStudent}>Them sinh vien</button>
      </div>:""
}
        </div>





      <h1>Danh sach sinh vien</h1>
      <button className="bg-red-500 " onClick={handleShow}>+them sinh vien</button>
      <table
      className="border-1,w-[100%]"
        border={1}
      >
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Ten sinh vien</th>
            <th>Email</th>
            <th>Dia chi</th>
            <th>So dien thoai</th>
            <th>Lua chon</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((v: any, i: number) => {
            return (
              <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{v.student_name}</td>
                <td>{v.email}</td>
                <td>{v.address}</td>
                <td>{v.phone}</td>
                <td>
                  <button onClick={() => handleDelete(v.id)}>Xoa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
