import { createContext, useReducer,useEffect,useState } from "react";

export const PostList = createContext({
  postList: [],
  // addPost:()=>{},
  // deletePost: ()=>{}
    load: false
})
const postListReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload.id);
       case 'ADD_POST':
      return [action.payload, ...state ]
      case 'add_initial':
       return action.payload.posts;

    default:
      return state;
  }
};

const PostListProvider = ({children})=>{
  const [postList , dispatch] = useReducer(postListReducer,[])

  // const addPost =(userId,postTitle,postBody,tags)=>{
  //   dispatch(
  //     {
  //     type:"ADD_POST",
  //     payload:{
  //       id : Date.now(),
  //         title: postTitle,
  //         body :postBody,
  //         userId: userId,
  //         tags: tags
  //     }
  //   }
  //   )
  // }
  // const deletePost =(postId)=>{
  //   dispatch({
  //     type:"DELETE_POST",
  //     payload:{
  //      postId
      
      
  //     }
  //   })
  // }
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
  
  return  (
   < PostList.Provider value={{postList, dispatch, load
   
  //  addPost,
   }}>
    {children}
    </PostList.Provider>
  )

}

// const DEFAULT_POST_LIST=[{
// id : '1',
// title : 'go to mumbai',
// body :"hifriends im going to mumbai",
// userId:'user-9',
// reactions : '20',
// tags: ['VACATion' , 'bombay']

// },

// {
// id : '2',
// title : 'go to delhi',
// body :"hifriends im going to delhi",
// userId:'user-6',
// reactions : '2',
// tags: ['VACATion' , 'delhi']


// },
// {
// id : '3',
// title : 'go to kashmir',
// body :"hifriends im going to delhi",
// userId:'user-7',
// reactions : '10',
// tags: ['vacation' , 'kashmir']


// }, ]
export default PostListProvider;


// PostListProvider app ke top-level me lagta hai (usually App.jsx ya layout ke andar):

// jsx
// Copy code
// <PostListProvider>
//   <App />
// </PostListProvider>
// ✅ Ye component sirf ek baar mount hota hai (poore app ke lifecycle me).

// Concept	createContext() Only	createContext() + Wrapper
// Banata kya hai?	Context + Provider	Ek custom React component with Provider
// Provider ka logic kahan likha?	Har jagah manual	Ek jagah centralize karke wrapper mein
// Kya baar-baar likhna padta?	Haan, Provider har jagah likhna padta	Nahi, sirf wrapper use karte ho
// Reuse karna easy?	❌ Nahi	✅ Haan
// Large app ke liye better?	❌ Messy ho jaata hai	✅ Clean aur maintainable