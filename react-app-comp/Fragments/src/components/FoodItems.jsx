import Item from "./Item";
const FoodItems=({items})=>{
    // let foodItems=["Dal","Green vegetable","Roti","Salad","Milk","Ghee"];
    return ( <ul className="list-group">
        {items.map((item)=>(
        <Item  key={item} foodItem={item}/>
          ))}
       
       
      </ul>

    )
}
export default FoodItems;