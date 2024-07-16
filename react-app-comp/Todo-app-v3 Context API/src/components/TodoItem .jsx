import { MdDeleteSweep } from "react-icons/md";

function TodoItem({todoName,todoDate, onDeleteClick}) {
  
  return (
    <div className="todo-container">
      <div className="row js-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger js-btn" onClick={()=>onDeleteClick(todoName)}>
          <MdDeleteSweep />

          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
