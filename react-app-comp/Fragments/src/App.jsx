import FoodItems from "./components/FoodItems";
import ErrorMessage from './components/ErrorMessage';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import './App.css'
import { useState } from "react";

function App() {
  // let foodItems=["Dal","Green vegetable","Roti","Salad","Milk","Ghee"];
  // let foodItems=[]; 
  // let textStateArr=useState("Food entered by user") ->useState hook used
  // let textToShow=textStateArr[0]
  // let setTextState=textStateArr[1]
let [foodItems,setfoodItems]  =useState(["Dal","Green vegetable","Roti"]);

  
  
  const onKeyDown=(event)=>{
    if(event.key=='Enter'){
      let newFoodItem=event.target.value;
      event.target.value=''
      let newItems=[...foodItems,newFoodItem]
      setfoodItems(newItems)
      
      console.log('current entered value is '+ newFoodItem);


    }
   
}
  return<> 
    <Container>
    
    
   
      <h1 className="food-heading">Healthy Foods</h1>
      {/* conditional rendering
      {foodItems.length===0 ? <h3>I am still hungry</h3> :null} */}
      <ErrorMessage items={foodItems}/>
      <FoodInput onKeyDown={onKeyDown} />
     
     <FoodItems  items={foodItems}/>
     </Container>
     <Container>
      <p>Above is the list of items which are good fro your health and well being</p>
     </Container>
     </>
  ;
}

export default App;
