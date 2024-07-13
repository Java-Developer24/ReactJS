import styles from './FoodInput.module.css'
const FoodInput=({onKeyDown})=>{
    
return <input onKeyDown={onKeyDown} type="text" placeholder="Enter food items here" className={styles.foodInput}/>
};
 export default FoodInput;