import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
const colors = [
  {
    name: 'Red',
    value: '#ff0000',
  },
  {
    name: 'Yellow',
    value: '#ffff00',
  },
  {
    name: 'Black',
    value: '#000000',
  },
  {
    name: 'Violet',
    value: '#ee82ee',
  },
  
  {
    name: 'Green',
    value: '#008000',
  },
  {
    name: 'Blue',
    value: '#0000ff',
  },
  
  
]
function App() {
 
  const [color, setcolor] = useState("");
  
  useEffect(()=>{
    const body = document.body;
    body.style.backgroundColor = color;
  },[color])
  

  return <div className='container'>

  
 <div className='palette'>
  {colors.map(color =>{
    return <button key={color.value} onClick={()=>{
      setcolor(color.value)
    }}>{color.name}</button>
  })}

 </div>

 </div>
}

export default App
