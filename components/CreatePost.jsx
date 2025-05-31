import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import {PostList }from '../store/post-list-store'
import { useNavigate } from 'react-router-dom'
export default function CreatePost() {
  const {addPost,dispatch} = useContext(PostList)
  const navigate = useNavigate()
  const userIdElement = useRef()
  const  postTitleElement= useRef()
  const postbodyElement = useRef()
  const reactionElement= useRef()
  const tagsElement = useRef()

  const handlesubmit=(e)=>{
    e.preventDefault()
   const userId= userIdElement.current.value;
   const title= postTitleElement.current.value;
   const body= postbodyElement.current.value;
   const reactions= reactionElement.current.value;

  const tags = tagsElement.current.value.split(',');

// addPost(userId,postTitle,postBody,tags)
 dispatch(
      {
      type:"ADD_POST",
      payload:{
            id: Date.now() + Math.floor(Math.random() * 1000),

       
          title,
  
          body,
           userId,
           reactions : { likes: Number(reactions) },
          tags
      }
    }
    )
userIdElement.current.value = '';
postTitleElement.current.value = '';
postbodyElement.current.value = '';
tagsElement.current.value = '';
reactionElement.current.value='';
navigate('/');
  }
  return (
    <div>
      <form className='create-post' onSubmit={handlesubmit}>
  <div className="mb-3">
    <label for="userid" className="form-label">enter user id </label>

    <input type="text"
    ref={userIdElement}
     className="form-control"
      id="userid"
      placeholder='Create your user id'/>
  
  </div>
  <div className="mb-3">
    <label for="title" className="form-label">post title</label>

    <input
     type="text"
     ref={postTitleElement}
     className="form-control"
      id="title"
      placeholder='tell us the title about it'/>
    
  </div>
  <div className="mb-3">
    <label for="body" className="form-label">post content</label>
  <textarea 
     type="text"
     ref={postbodyElement}
     className="form-control"
      id="body"
      placeholder='tell us more about it'/>
    
  </div>

  <div className="mb-3">
    <label for="tags" className="form-label">enter hastags</label>

    <input type="text"
    ref={tagsElement}
     className="form-control"
      id="tags"
      placeholder='enter hastags'/>
      
    
  </div>
  <div className="mb-3">
    <label for="reaction" className="form-label">number of reaction</label>

    <input type="text"
    ref={reactionElement}
     className="form-control"
      id="reaction"
      placeholder='enter the number of reaction'/>
      
    
  </div ><div className="mx-auto" style={{width: "200px"}}>

  
  <button type="submit" className="btn btn-primary">post</button>
  </div>
</form>
    </div>
  )
}
