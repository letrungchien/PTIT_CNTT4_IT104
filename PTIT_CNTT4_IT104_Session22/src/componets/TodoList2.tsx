import React,{ useState} from 'react'

interface Student{
    id:number;
    idStudent:string;
    name:string;
    age:string;
    gender:string;
}
let id=0;
export default function TodoList2() {
const [show,setShow]=useState<boolean>(false);
const [idStudent,setIdStudent]=useState<string>("");
const [name,setName]=useState<string>("");
const [age,setAge]=useState<string>("");
const [gender,setGender]=useState<string>("nam");
const [students, setStuidents] = useState<Student[]>(() => {
  const studentLocal = localStorage.getItem("students");
  return studentLocal ? JSON.parse(studentLocal) : [];
});
const handleId=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setIdStudent(e.target.value);
}
const handleName=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setName(e.target.value);
}
const handleAge=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setAge(e.target.value);
}
const handleGender=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  setGender(e.target.value);
}
const handleSubmit=(e:React.FormEvent)=>{
 e.preventDefault();

 const newStudent:Student={
  id:id++,
  idStudent:idStudent,
  name:name,
  age:age,
  gender:gender
 };
const studentClones=[...students,newStudent]
setStuidents(studentClones)
localStorage.setItem("students",JSON.stringify(studentClones));
 setIdStudent("");
 setAge("");
 setName("");
}
const handleShow=()=>{
show?setShow(false):setShow(true);
}
const handleDelete = (id: number | string) => {
    const studentDele =students.filter((i) => i.id !== id);
  setStuidents(studentDele);
    localStorage.setItem("students", JSON.stringify(studentDele));
  };
  return (
   <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Basic React Lab</title>
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-primary btn-icon-text" onClick={handleShow}>
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                />
                <button className="btn btn-primary btn-icon-text">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control">
                <option value="">Sắp xếp</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
              </select>
            </div>
          </div>
        </div>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item,index)=>(
                    <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.idStudent}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                      >
                        Xem
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                        onClick={()=>handleDelete(item.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
               
                ))}
          

              </tbody>
            </table>
          </div>
        </div>
        {/* END LIST STUDENT */}
      </div>
    </div>

    

    {/* START FORM SINH VIEN */}
    <div className={show?"col-5 grid-margin block":"hidden"}>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" value={idStudent} className="form-control" onChange={handleId} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={name} onChange={handleName} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={age} onChange={handleAge}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" value={gender} onChange={handleGender}>
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* END FORM SINH VIÊN */}
  </div>
</>

  )
}
