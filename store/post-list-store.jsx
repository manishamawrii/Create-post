import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  // addPost:()=>{},
  // deletePost: ()=>{}
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
  return  (
   < PostList.Provider value={{postList, dispatch
   
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