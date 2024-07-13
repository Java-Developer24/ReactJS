import styles from './Buttons.module.css'

const Buttons=({buttons})=>{
   return (<div className={styles.buttonsContainer}>
    {buttons.map((button)=>(<button  key={button} className={styles.button}>{button}</button>))}

</div>);

};

export default Buttons;