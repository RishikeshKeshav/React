import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
   
<div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded '>
    <button onClick={() => setColor("red")} className='px-4 rounded-full' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={() => setColor("blue")} className='px-4 rounded-full' style={{backgroundColor:"blue"}}> Blue</button>
    <button onClick={() => setColor("green")} className='px-4 rounded-full' style={{backgroundColor:"Green"}}>Green</button>
    <button onClick={() => setColor("orange")} className='px-4 rounded-full' style={{backgroundColor:"Orange"}}>Orange</button>

  </div>
  

</div>
    </div>
  )
}

export default App
