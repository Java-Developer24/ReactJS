import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost=()=>{

//  const{addPost}= useContext(PostList);
//  const navigate=useNavigate();

// const userIdElement=useRef();
// const postTitleElement=useRef();
// const postBodyElement=useRef();

// const likesElement=useRef();
// const dislikesElement=useRef();

// const tagsElement=useRef();
// const postViewsElement=useRef();




const handleSubmit=(event)=>{
  // event.preventDefault();
  // const userId=userIdElement.current.value;
  // const postTitle=postTitleElement.current.value;
  // const postBody=postBodyElement.current.value;
  // // const postLikes = parseInt(likesElement.current.value) || 0;
  // const postLikes = likesElement.current.value;
  //   const postDislikes = parseInt(dislikesElement.current.value) || 0;
  // const tags=tagsElement.current.value.split(' ');
  // const postViews = parseInt(postViewsElement.current.value) || 0;



  // userIdElement.current.value="";
  // postTitleElement.current.value="";
  // postBodyElement.current.value="";
  // likesElement.current.value="";
  // dislikesElement.current.value="";
  // tagsElement.current.value="";
  // postViewsElement.current.value="";

  // fetch('https://dummyjson.com/posts/add', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     title:postTitle,
  //     body:postBody,
  //     reactions:{
  //     likes:postLikes,
  //     dislikes:postDislikes},
  //     userId:userId,
  //     tags:tags,
  //     views:postViews,

  //   })
  // })
  // .then(res => res.json())
  // .then((post)=>{
  //   addPost(post);
  // });
  // navigate("/");
  
  // // addPost(userId,postTitle,postBody,postLikes,postDislikes,tags,postViews);
 

}


    return(
    <Form method="POST" className="create-post" 
    // onSubmit={handleSubmit}
    >

            <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here </label>
          <input type="text" 
          // ref={userIdElement}
          name="userId"
          className="form-control"
          id="userId" 
          placeholder="Your User Id"/>
         </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title</label>
          <input type="text" 
          // ref={postTitleElement}
          name="title"
          className="form-control"
         id="postTitle"
          placeholder="How are you feeling"/>
         </div>

         <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content</label>
          <textarea
           type="text"
          //  ref={postBodyElement}
          name="body"
           rows="4"
           className="form-control"
          id="postBody"
          placeholder="Tell us more about it here"/>
          </div>
          <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of likes
            </label>
           
          <input type="number" 
          // ref={likesElement}
          name="reactions.likes"
          className="form-control"
         id="likes"
          placeholder="Number of likes"/>
 <label htmlFor="reactions" className="form-label">
            Number of dislikes
            </label>
            <input type="number" 
          // ref={dislikesElement}
          name="reactions.dislikes"
          className="form-control"
          id="dislikes" 
          placeholder="Number of likes"/>
         </div>
      <div  className="mb-3">
         <label htmlFor="reactions" className="form-label">
           No. of Views
            </label>
            <input type="number" 
          // ref={postViewsElement}
          name="views"
          className="form-control"
          id="postViews"
          placeholder="How many people reacted to this post"/>
  </div>
  
         <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hastags here
            </label>
          <input type="text" 
          // ref={tagsElement}
          name="tags"
          className="form-control"
          id="tags" 
          placeholder="Please enter tags using space"/>
         </div>
       
       
        <button type="submit" className="btn btn-primary">Post</button>
      </Form>);

}

export async function createPostAction(data){
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post)=>{
    console.log(post);
  });
  
  
  return redirect('/')
 

}

export default CreatePost;