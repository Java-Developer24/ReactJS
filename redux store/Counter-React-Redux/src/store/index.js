import {createStore} from "redux"

const INTIAL_VALUE={
    counter:0,
    privacy:false
}
const counterReducer=(store=INTIAL_VALUE,action)=>{
    let newStoreValue=store;
    if(action.type==="INCREMENT"){
        newStoreValue={...store,counter:store.counter+1};

    }else if(action.type==="DECREMENT"){
        newStoreValue={...store,counter:store.counter-1};

    }else if(action.type==="ADD"){
        newStoreValue={...store,counter:store.counter+Number(action.payload.num)};

    }else if(action.type==="SUBTRACT"){
        newStoreValue={...store,counter:store.counter-Number(action.payload.num)};

    }
    else if(action.type==="PRIVACY_TOGGLE"){
        newStoreValue={...store,privacy:!store.privacy};

    }
    return newStoreValue;

}
const counterStore=createStore(counterReducer);
export default counterStore;