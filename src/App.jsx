import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sliderbar from '../components/Sliderbar'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
   
// const [activepage, setActivepage] = useState("Home")
  return (
 <PostListProvider>
    

    <div className='main'>
    <Sliderbar></Sliderbar>
<div className='main2'>
    <Header></Header>
  
 {/* { activepage==="Home"?<PostList ></PostList> :<CreatePost></CreatePost>} */}
   <Outlet></Outlet>
    <Footer></Footer>
    </div>
    </div>
      </PostListProvider>
    
   
  )
}
   

export default App







//reaction 10:58//////////////////////////////////





