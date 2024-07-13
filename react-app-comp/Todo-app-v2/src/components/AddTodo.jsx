import styles from './AddTodo.module.css'

function AddTodo() {
  return (
    <div className="Todo-container">
      <div className="row js-row">
        <div className="col-4">
          <input type="text" placeholder="enter the todo here" className={styles.holder}/>
        </div>
        <div className="col-4">
          <input type="date" className={styles.holder}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success js-btn" >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
