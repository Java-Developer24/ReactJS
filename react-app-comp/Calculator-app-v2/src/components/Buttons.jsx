import styles from './Buttons.module.css'

const Buttons=({buttons,btnClick})=>{
   return (<div className={styles.buttonsContainer}>
    {buttons.map((button)=>(<button  key={button} className={styles.button}   onClick={()=>btnClick(button)}>{button}</button>))}

</div>);

};

export default Buttons;