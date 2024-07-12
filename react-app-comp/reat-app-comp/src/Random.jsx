function Random(){
    let number= Math.random()*100;
    return <h1 style={{'background-color':'green'}}>
        This is a random number :{Math.round(number)}
    </h1>
}

export default Random;