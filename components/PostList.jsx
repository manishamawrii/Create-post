import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import Loading from './Loading'

export default function PostList() {
 const {postList,dispatch} =useContext(PostListData)
 const [load, setLoad] = useState(false);
console.log("postList from context", postList)

useEffect(() => {
    if(postList.length>0){
    return
  }
 setLoad(true)
 const controller = new AbortController();
 const signal = controller.signal
 fetch('https://dummyjson.com/posts' ,{signal})
.then(res => res.json())

.then((data)=>{
  console.log("API Response", data)
  console.log(data.posts)
    dispatch(
  {
    type:"add_initial",
    payload :{
    posts: data.posts
    }
  }
)
setLoad(false)
} )

  return () => {
  console.log("cleanup")
  controller.abort();
  }
}, [])

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
