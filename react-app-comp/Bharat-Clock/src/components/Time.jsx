function Time(){
   
    let time= new Date();
    return <p className="lead">This is the time {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
}
export default Time;