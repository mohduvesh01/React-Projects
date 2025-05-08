function TodoItem1() {
  let todoItem = ` Buy Milk`;
  let date = "04/10/2023";
  return (
    <div className="container text-center mb-3">
      <div className="row">
        <div className="col-5">{todoItem}</div>
        <div className="col-5">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
