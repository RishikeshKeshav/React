import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Components/Card'


function App() {
  const [count, setCount] = useState(0)
let myobj= {
  username:"rishikeshandhare",
  age:'30'
}

let names = [1,2,3,4]
  return (

    <>
    <h1 className='bg-green-400 text-yellow p-4 rounded-xl mb-4 '> Tailwind test</h1>
   <Card username="rishi" btntext="CEo"/>
</>
  )
}

export default App
