import { useEffect, useState } from "react";

function Time(){
   const [time,setTime]= useState(new Date())
   
    useEffect(()=>{
        console.log("interval is setup");
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>{
            console.log("interval is cleared");
            clearInterval(intervalId)
        }
    },[])
    return <p className="lead">This is the time {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
}
export default Time;