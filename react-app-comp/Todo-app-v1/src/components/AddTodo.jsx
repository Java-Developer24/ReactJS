function AddTodo() {
  return (
    <div class="Todo-container">
      <div class="row js-row">
        <div class="col-4">
          <input type="text" placeholder="enter the todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success js-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
