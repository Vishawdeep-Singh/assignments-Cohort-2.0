import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div className='container'>
    <div className="back-style">
      
   
    </div>
    <div className="profile-pic">

  <img src="/profile-pic.png" alt="" srcset="" className='pic' />
    </div>
    
    <div className="desc">
     
      <p className='name'> Vishawdeep Singh <span>20</span>  </p> 
      
      
      
      <p className='country'>India</p>
    
    </div>
   <hr />
    <div className="profile-info">
    <div className="followers">
     <p>80K</p>
     <p>Followers</p>
    </div>
    <div className="likes">
     <p>803K</p>
     <p>Likes</p>
    </div>
    <div className="photos">
     <p>1.4K</p>
     <p>Photos</p>
    </div>
    </div>
  </div>
}

export default App
