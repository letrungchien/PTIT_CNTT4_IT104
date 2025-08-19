import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

const TodoListIndex = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  Quản lý công việc
                </h3>

                {/* Form thêm công việc */}
                <Content1 />

                {/* Tabs điều hướng */}
                <Content2 />

                {/* Danh sách công việc */}
                <Content3 />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoListIndex;
