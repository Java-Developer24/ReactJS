import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData }from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList=()=>{
    const{postList,addIntialPosts}=useContext(PostListData)
    const [fetching, setFetching]=useState(false);
    
    
    

    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal
        setFetching(true)
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{
            addIntialPosts(data.posts);
            setFetching(false);
        })
    
    return ()=>{

        console.log("useEffect aborted");
        controller.abort();
    }},
    
        []);

            
            // const handleGetPostFromserver=()=>{ 
            //     fetch('https://dummyjson.com/posts')
            //     .then(res => res.json())
            //     .then((data)=>{
            //         addIntialPosts(data.posts)})}
  
return<>
{fetching&&<LoadingSpinner/>}
{!fetching&&postList.length===0&&<WelcomeMessage  />}
{/* {postList.length===0&&<WelcomeMessage handlePostData= {handleGetPostFromserver} />} */}
{!fetching&&postList.map((post)=>(
<Post key={post.id} post={post}/>
    ))}


</>
}
export default PostList;