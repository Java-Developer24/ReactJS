// import styles from './ButtonContainer.module.css'
import Buttons from './Buttons';
const ButtonContainer=({onButtonClick})=>{
    const buttonNames=["C",'1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return<>
        <Buttons buttons={buttonNames} btnClick={onButtonClick}/>
   
  </>
}

export default ButtonContainer;