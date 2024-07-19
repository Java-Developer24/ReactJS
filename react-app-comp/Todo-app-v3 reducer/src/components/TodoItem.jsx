import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({todoName,todoDate}) {
 const {deleteItem}= useContext(TodoItemsContext)
  
  return (
    <div className="todo-container">
      <div className="row js-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger js-btn" 
          onClick={()=>deleteItem(todoName)}>
          <MdDeleteSweep />

          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
