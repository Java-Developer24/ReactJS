import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"

import './App.css'
function App() {
  let todoItems=[{
    name:'Buy milk',
    dueDate:'4/10/2023',
  },
  {
    name:'Go to college',
    dueDate:'4/10/2023',
  }
,
{
  name:'Cart',
  dueDate:'$200',
}]
 
  return (
    <center className="container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
       
    </center>
  );
}

export default App;
