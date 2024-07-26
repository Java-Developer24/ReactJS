import { useContext, useEffect } from "react";
import Post from "./Post";
import {PostList as PostListData }from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList=()=>{
    const{postList,addIntialPosts}=useContext(PostListData)
    

    // useEffect(()=>{ fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((data)=>{
    //         addIntialPosts(data.posts);})},[]);

            const handleGetPostFromserver=()=>{ 
                fetch('https://dummyjson.com/posts')
                .then(res => res.json())
                .then((data)=>{
                    addIntialPosts(data.posts)})}
  
return<>
{postList.length===0&&<WelcomeMessage handlePostData= {handleGetPostFromserver} />}
{postList.map((post)=>(
<Post key={post.id} post={post}/>
    ))}


</>
}
export default PostList;