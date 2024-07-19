import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage";

import './App.css'
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

// const todoItemsReducer=()=>{
//   return [];
// }
function App() {
  

const[todoItems,setTodoItems]=useState([]);


// const [newTodoItems, dispatchTodoItems]=useReducer(todoItemsReducer,[]);

const addNewItem=(itemName,itemDueDate)=>{
 const newTodoItems=
   [...todoItems,{name:itemName,dueDate:itemDueDate}]
    
  setTodoItems(newTodoItems)
  console.log(`New Item added :${itemName} date:${itemDueDate}`)
}
const deleteItem=(todoItemName)=>{
  const newTodoList=todoItems.filter((item)=>item.name!==todoItemName);
  setTodoItems(newTodoList);
  console.log(`Deleted item:${todoItemName}`)

}

 
  return (
      <TodoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        deleteItem,
        }}>
    <center className="container">
      <AppName />
     
      <AddTodo  />
      <WelcomeMessage/>
      <TodoItems />
       
    </center>
    </TodoItemsContext.Provider>
  );
}



export default App;
