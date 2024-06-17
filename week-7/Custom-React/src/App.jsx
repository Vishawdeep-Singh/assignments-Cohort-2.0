import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const AnchorData = [
  {
    src: "https://www.google.com/",
    name: "Google"
  },
  {
    src: "https://www.facebook.com/",
    name: "Facebook"
  },
  {
    src: "https://www.twitter.com/",
    name: "Twitter"
  },
  {
    src: "https://www.linkedin.com/",
    name: "LinkedIn"
  },
  {
    src: "https://www.youtube.com/",
    name: "YouTube"
  },
  {
    src: "https://www.reddit.com/",
    name: "Reddit"
  }
];
function App() {
  return <div>
    <CreateAnchor></CreateAnchor>
  </div>

 
  
}
function CreateAnchor(){
  
 return AnchorData.map((anchor)=>{
    return <div>
 <a href={anchor.src}>{anchor.name}</a>
  </div>
  })
}
 

export default App
