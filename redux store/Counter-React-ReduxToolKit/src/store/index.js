// import {createStore} from "redux"
import {configureStore, createSlice} from "@reduxjs/toolkit"



const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increment:(state, action)=>{
            state.counterVal++
            console.log(state,action);
        },
        decrement:(state, action)=>{
            state.counterVal--
            console.log(state,action);
        },
        add:(state, action)=>{
            state.counterVal+=Number(action.payload)
            console.log(state,action);
        },
        subtract:(state, action)=>{
            state.counterVal-=Number(action.payload)

            console.log(state,action);
        },
        
    }

})

// const counterStore=createStore(counterReducer);
const counterStore=configureStore({reducer:{
    counter:counterSlice.reducer
}})
export default counterStore;
export const  counterActions=counterSlice.actions;



// const INTIAL_VALUE={
//     counter:0,
//     privacy:false
// }
// const counterReducer=(store=INTIAL_VALUE,action)=>{
//     let newStoreValue=store;
//     if(action.type==="INCREMENT"){
//         newStoreValue={...store,counter:store.counter+1};

//     }else if(action.type==="DECREMENT"){
//         newStoreValue={...store,counter:store.counter-1};

//     }else if(action.type==="ADD"){
//         newStoreValue={...store,counter:store.counter+Number(action.payload.num)};

//     }else if(action.type==="SUBTRACT"){
//         newStoreValue={...store,counter:store.counter-Number(action.payload.num)};

//     }
//     else if(action.type==="PRIVACY_TOGGLE"){
//         newStoreValue={...store,privacy:!store.privacy};

//     }
//     return newStoreValue;

// }