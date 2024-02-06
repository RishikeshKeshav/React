import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")

//UseRef
const passwordRef = useRef(null)

const passwordCopy = useCallback(() =>
{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
},[password])


  const passwordGenerator = useCallback(()=>{
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"
    if(characterAllowed) str += "!@#$%^&*()_+"

    for(let i=1;i<=length;i++)
    {
       let char = Math.floor((Math.random() * str.length + 1))
       pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])

   useEffect( () => {
   passwordGenerator()
   }, [length,numberAllowed,characterAllowed,passwordGenerator])




  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 my-8 text-orange-500 bg-gray-400'>
   <h1 className='text-orange-500 text-center my-3'> Password Generator</h1>   
<div className='flex shadow rounded-lg overflow-hidden py-1 px-3 rounded'>
  <input type="text" value={password} className='outline-none w-full py-1 x-3 rounded' placeholder='password' readOnly ref={passwordRef}></input>
<button className='text-white bg-blue-600  solid' onClick={passwordCopy}> Copy </button>
</div>
<div className='flex text-sm gap-x-2'></div>
<div className='flex items-center gap-x-1'>
  <input type="range"
  value={length}
  min = {6}
  max={15}
  className='cursor-pointer'
  onChange={(e) => {setLength(e.target.value)}}
   />
    <label className='text-white'> Length : {length}</label>

<div className='flex items-center gap-x-1'>
  <input 
  type='checkbox' 
  defaultChecked={numberAllowed} 
  id="numberInput"
  onChange={()=>{
    setnumberAllowed((prev) => !prev)
  }}/>
  <label htmlFor='numberInput' className='text-white'> Numbers</label>

</div>
<div className='flex items-center gap-x-1'>
  <input 
  type='checkbox' 
  defaultChecked={characterAllowed} 
  id="characterInput1"
  onChange={()=>{
    setCharacterAllowed((prev) => !prev)
  }}/>
  <label htmlFor='caharacterInput1' className='text-white'> Characters</label>
  </div>
</div>
     </div>
      
    </>
  )
}

export default App
