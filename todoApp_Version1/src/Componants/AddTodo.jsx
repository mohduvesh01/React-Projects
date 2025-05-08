function AddTodo() {
  return (
    <div className="container text-center mb-3">
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Enter your details" />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
