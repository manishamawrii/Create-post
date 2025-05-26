import React, { useContext } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import {PostList} from '../store/post-list-store';

export default function Post({ post }) {
  const {dispatch} = useContext(PostList)
  return (
    <div>
      <div className="card post-card" style={{ width: "25rem" }}>
       
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
        
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  onClick={()=> dispatch({
      type:"DELETE_POST",
      payload:{
       id:post.id
      
      
      }
    })}>
  
   <FaDeleteLeft />
  </span>
  
            {/* <p className="card-text">{post.userId}</p> */}
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag)=>(
            <span className="badge text-bg-primary hastag">{tag} 
</span>
          ))}
          <div className="alert alert-info reactions mt-3" role="alert">
  This post has been reacted by {post.reactions.likes} people
</div>
         
        </div>
      </div>
    </div>
  );
}
