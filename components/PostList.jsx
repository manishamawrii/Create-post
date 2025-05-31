import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import Loading from './Loading'

export default function PostList() {
 const {postList,dispatch,load} =useContext(PostListData)
 
  return (
    <div>

      {!load && postList==="" && <WelcomeMessage/>    }

    {load &&< Loading/>}


      {postList.map((post)=> 
<Post 
    key={post.id}
   
    
    post= {post}
  />
      )}
      
      
    </div>
  )
}
