import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sliderbar from '../components/Sliderbar'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  
const [activepage, setActivepage] = useState("Home")
  return (

    <>

    <div className='main'>
    <Sliderbar setActivepage={setActivepage}
    activepage={activepage}></Sliderbar>
<div className='main2'>
    <Header></Header>
  
 { activepage==="Home"?<PostList ></PostList> :<CreatePost></CreatePost>}

    <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App







//reaction 10:58//////////////////////////////////





