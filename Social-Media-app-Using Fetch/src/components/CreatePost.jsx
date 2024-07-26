import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost=()=>{

 const{addPost}= useContext(PostList);

const userIdElement=useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();

const likesElement=useRef();
const dislikesElement=useRef();

const tagsElement=useRef();
const postViewsElement=useRef();




const handleSubmit=(event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
  const postTitle=postTitleElement.current.value;
  const postBody=postBodyElement.current.value;
  // const postLikes = parseInt(likesElement.current.value) || 0;
  const postLikes = likesElement.current.value;
    const postDislikes = parseInt(dislikesElement.current.value) || 0;
  const tags=tagsElement.current.value.split(' ');
  const postViews = parseInt(postViewsElement.current.value) || 0;
  
  addPost(userId,postTitle,postBody,postLikes,postDislikes,tags,postViews);
  userIdElement.current.value="";
  postTitleElement.current.value="";
  postBodyElement.current.value="";
  likesElement.current.value="";
  dislikesElement.current.value="";
  tagsElement.current.value="";
  postViewsElement.current.value="";

}


    return(
    <form className="create-post" onSubmit={handleSubmit}>

            <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here </label>
          <input type="text" 
          ref={userIdElement}
          className="form-control"
          id="userId" 
          placeholder="Your User Id"/>
         </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title</label>
          <input type="text" 
          ref={postTitleElement}
          className="form-control"
         id="postTitle"
          placeholder="How are you feeling"/>
         </div>

         <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content</label>
          <textarea
           type="text"
           ref={postBodyElement}
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
          ref={likesElement}
          className="form-control"
         id="likes"
          placeholder="Number of likes"/>
 <label htmlFor="reactions" className="form-label">
            Number of dislikes
            </label>
            <input type="number" 
          ref={dislikesElement}
          className="form-control"
          id="dislikes" 
          placeholder="Number of likes"/>
         </div>
      <div  className="mb-3">
         <label htmlFor="reactions" className="form-label">
           No. of Views
            </label>
            <input type="number" 
          ref={postViewsElement}
          className="form-control"
          id="postViews"
          placeholder="How many people reacted to this post"/>
  </div>
  
         <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hastags here
            </label>
          <input type="text" 
          ref={tagsElement}
          className="form-control"
          id="tags" 
          placeholder="Please enter tags using space"/>
         </div>
       
       
        <button type="submit" className="btn btn-primary">Post</button>
      </form>);

}
export default CreatePost;