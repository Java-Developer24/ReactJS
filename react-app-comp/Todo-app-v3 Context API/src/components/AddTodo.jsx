import { useRef } from 'react';
import styles from './AddTodo.module.css'
import { BiAddToQueue } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";




function AddTodo({onNewItem}) {
 

  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleAddButtonClicked=()=>{
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current=''
    dueDateElement.current=''
   
    onNewItem(todoName,dueDate);
    
  }


  return (
    <div className="Todo-container">
      <div className="row js-row">
        <div className="col-4">
          <input type="text" placeholder="enter the todo here" className={styles.holder} 
          
          ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.holder} 
          
          ref={dueDateElement}
         />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success js-btn" onClick={handleAddButtonClicked} >
          <BiAddToQueue />

          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
