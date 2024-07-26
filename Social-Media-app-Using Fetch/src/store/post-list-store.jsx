import { createContext, useReducer } from "react";







export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    addIntialPosts:()=>{},
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

    const addPost=(userId,postTitle,postBody,postLikes,postDislikes,tags,postViews)=>{
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                id:Math.floor(Math.random() * 100),
                title:postTitle,
                body:postBody,
                reactions:{
                likes:postLikes,
                dislikes:postDislikes},
                userId:userId,
                tags:tags,
                views:postViews,
                

                
                },
            }

        )

        console.log(`${userId} ${postTitle} ${postBody} ${postLikes} ${postDislikes} ${postViews} ${tags}`)

    }
   

    const addIntialPosts=(posts)=>{
        dispatchPostList({
            type:'ADD_INTIAL_POST',
            payload:{
                posts
                },
            }

        )

        

    }
    const deletePost=(postId)=>{
        console.log(postId)
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
             postId
             },
    });
        

    };
    return <PostList.Provider value={{postList,addPost,deletePost,addIntialPosts}}>
        {children}
    </PostList.Provider>

};



export default PostListProvider;