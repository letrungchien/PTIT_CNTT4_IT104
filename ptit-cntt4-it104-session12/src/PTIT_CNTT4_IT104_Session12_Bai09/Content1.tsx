const Content1 = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
               
                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form2" className="form-control" />
                    <label className="form-label" htmlFor="form2">
                      Thêm công việc
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Thêm
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
