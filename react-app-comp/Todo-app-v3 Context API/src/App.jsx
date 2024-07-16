import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage";

import './App.css'
import { useState } from "react";
function App() {
  let initialTodoItems=[{
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

const[todoItems,setTodoItems]=useState(initialTodoItems)
const handleNewItem=(itemName,itemDueDate)=>{
 
 

  setTodoItems((currVal)=>
   [...currVal,{name:itemName,dueDate:itemDueDate}]
    
  )
  console.log(`New Item added :${itemName} date:${itemDueDate}`)
}
const handleDeleteItem=(todoItemName)=>{
  const newTodoList=todoItems.filter((item)=>item.name!==todoItemName);
  setTodoItems(newTodoList);
  console.log(`Deleted item:${todoItemName}`)

}
 
  return (
    <center className="container">
      <AppName />
     
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length==0&&<WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
       
    </center>
  );
}

export default App;
