import styles from './Item.module.css'
const Item=({foodItem,buttonHandler})=>{
    // const buttonHandler=(event)=>{
    //     console.log(event)
    //     console.log(`${foodItem} being bought`)}
    return(  <li  className="list-group-item">{foodItem}
     <button onClick={buttonHandler} className= {`${styles.button} btn btn-info`}>Buy</button></li>);
}
export default Item;