import { useState } from 'react';
import styles from './AddTodo.module.css'

function AddTodo({onNewItem}) {
  const[todoName,setTodoName]=useState();
  const[dueDate, setDueDate]=useState();

  const handleNameChange=(event)=>{
    setTodoName(event.target.value)

  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value)
    
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    setTodoName('')
    setDueDate('')
  }


  return (
    <div className="Todo-container">
      <div className="row js-row">
        <div className="col-4">
          <input type="text" placeholder="enter the todo here" className={styles.holder} onChange={handleNameChange} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" className={styles.holder} onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success js-btn" onClick={handleAddButtonClicked} >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
