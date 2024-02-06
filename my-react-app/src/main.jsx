import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const username = 'Rishikesh Andhare'
const createElement1 = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Clisck me createelement',
  username

)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  // createElement1

  
 
   <React.StrictMode>
    <App />
  </React.StrictMode>,

)
