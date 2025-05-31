import ReactDOM from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from '../components/PostList.jsx'

import App from './App.jsx'

import CreatePost from '../components/CreatePost.jsx'
const router = createBrowserRouter([
  {path:"/",
     element: <App />,
     children:[
     {path:"/", element: <PostList/>},
    {path:"/create-post" , element:<CreatePost/> }]
     }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   
   
  </StrictMode>,
)
