import { useCallback } from "react";
import { createContext, useReducer,useState,useEffect } from "react";







export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    // fetching:false,
    deletePost:()=>{}
})

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList];

    }else if(action.type==="ADD_INTIAL_POST"){
        newPostList=action.payload.posts;

    }else if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter((post) => post.id !== action.payload.postId);


    }
    return newPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[])
    // const [fetching, setFetching]=useState(false);
    
    
    

    

    const addPost=(post)=>{
        console.log(post);
        dispatchPostList({
            type:'ADD_POST',
            payload:post
            }

        )

        // console.log(`${userId} ${postTitle} ${postBody} ${postLikes} ${postDislikes} ${postViews} ${tags}`)

    }

    // const addPost=(userId,postTitle,postBody,postLikes,postDislikes,tags,postViews)=>{
    //     dispatchPostList({
    //         type:'ADD_POST',
    //         payload:{
    //             id:Math.floor(Math.random() * 100),
    //             title:postTitle,
    //             body:postBody,
    //             reactions:{
    //             likes:postLikes,
    //             dislikes:postDislikes},
    //             userId:userId,
    //             tags:tags,
    //             views:postViews,
                

                
    //             },
    //         }

    //     )

    //     console.log(`${userId} ${postTitle} ${postBody} ${postLikes} ${postDislikes} ${postViews} ${tags}`)

    // }
   

    const addIntialPosts=(posts)=>{
        dispatchPostList({
            type:'ADD_INTIAL_POST',
            payload:{
                posts
                },
            }

        )

        

    }
    const deletePost=useCallback((postId)=>{
        console.log(postId)
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
             postId
             },
    })
        

    },[dispatchPostList]);

    // useEffect(()=>{
    //     const controller=new AbortController();
    //     const signal=controller.signal
    //     setFetching(true)
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((data)=>{
    //         addIntialPosts(data.posts);
    //         setFetching(false);
    //     })
    
    // return ()=>{

    //     console.log("useEffect aborted");
    //     controller.abort();
    // }},
    
        // []);
    return <PostList.Provider value={{postList,addPost,deletePost}}>
        {children}
    </PostList.Provider>

};



export default PostListProvider;