function TodoItem1() {
  let todoName = "Buy milk";
  let todoDate = "4/10/2023";
  return (
    <div class="todo-container">
      <div class="row js-row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger js-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
