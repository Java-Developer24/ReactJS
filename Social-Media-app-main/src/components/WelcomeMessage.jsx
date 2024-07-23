const WelcomeMessage=({onGetPostsClick})=>{
    return(<center  className="welcome-message"><h1>There is no post</h1>
    
    <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get post from server</button>
    </center>)
}

export default WelcomeMessage;