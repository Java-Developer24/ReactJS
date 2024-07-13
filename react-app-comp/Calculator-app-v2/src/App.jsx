
import styles from './App.module.css'
import Display  from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'
function App() {
  const [calVal,setCalVal]=useState('')
 
  const onButtonClick=(buttonName)=>{
    if(buttonName==="C"){
      setCalVal("");

    }else if(buttonName==='='){
      const result=eval(calVal)
      setCalVal(result)

    }else{
      let newDisplayVal=calVal+buttonName;
      setCalVal(newDisplayVal);
    }
    
    
    console.log(buttonName)}

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
      
    </div>
  )
}

export default App;
