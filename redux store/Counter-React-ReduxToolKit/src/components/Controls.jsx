import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const Controls=()=>{
    const dispatch=useDispatch()
    const inputELement=useRef();
    const handleIncrement=()=>{
       dispatch( counterActions.increment())
    }
    const handleDecrement=()=>{
       dispatch(counterActions.decrement())
        }
    const handleAdd=()=>{
        // dispatch({type:"ADD",payload:{
        //     num:inputELement.current.value,
        // }})

        dispatch(counterActions.add(inputELement.current.value))
        inputELement.current.value="";
    }
    const handleSubtract=()=>{
        // dispatch({type:"SUBTRACT",payload:{
        //     num:inputELement.current.value,
        // }}) 
        dispatch(counterActions.subtract(inputELement.current.value))

        inputELement.current.value="";
    }
    const handlePrivacyToggle=()=>{
        dispatch({type:"PRIVACY_TOGGLE"})
    }
    return(<><div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-warning"
        onClick={handlePrivacyToggle}
        >Privacy Toggle</button>

        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}> +1 </button>
        <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
        
        <input type="text" 
         className="number-input" placeholder="Enter your Number"
         ref={inputELement}
            /> 
        <button type="button" className="btn btn-success" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-danger" onClick={handleSubtract}>subtract</button>

        
        </div> </>)

}
export default Controls;
