import FoodItems from "./components/FoodItems";
import ErrorMessage from './components/ErrorMessage'

function App() {
  let foodItems=["Dal","Green vegetable","Roti","Salad","Milk","Ghee"];
  // let foodItems=[]; 
  return (
    
    <>
      <h1>Healthy Foods</h1>
      {/* conditional rendering
      {foodItems.length===0 ? <h3>I am still hungry</h3> :null} */}
      <ErrorMessage items={foodItems}/>
     <FoodItems  items={foodItems}/>
    </>
  );
}

export default App;
