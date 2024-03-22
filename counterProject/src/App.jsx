import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setCounter] = useState(15)

 

 const addValue = () => {
  console.log("counter Value" , counter);
   counter = counter +1;
  //  setCounter(counter)
   setCounter(prevCounter => prevCounter+1)
   setCounter(prevCounter => prevCounter+1)
   setCounter(prevCounter => prevCounter+1)
   setCounter(prevCounter => prevCounter+1)
 }

 const decreaseValue = () => {
  console.log("decemeneting value", counter);
  counter = counter -1;
  if(counter>=0)
  setCounter(counter)

 }

  return (
   <>
   <h1>This counter Project</h1>
   <h1> By RIshikesh</h1>
   <h2> Le the Count be {counter}</h2>
   <button onClick={addValue}> Increment</button>
   <br/>
   <button onClick={decreaseValue} >Decrement</button>
   
</>
  )
}

export default App
