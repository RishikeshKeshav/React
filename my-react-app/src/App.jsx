import Header from './Components/Header';
import Footer from './Components/Footer';
import Food from './Components/Food';
import Card from './Components/Card';
import rishiImage from '/images/rishi.png';
import React from 'react';

function Card1(){
   return(
       <div className="card">
        <img className="card-image"src ={rishiImage} alt="profile pic" height="100px" width="100px"></img>
       <h2>Card Details</h2>
       </div>
   );
}
const ReactElement ={
   type:'a',
   props: {
       href:'https://google.com',
       target:'_blank'
   },
   children:'visiti google from here click'
}


function App() {
  const username = 'RIshikesh'
   return(

       <>
       <h1>This is {username}</h1>
     <Card/>
   <Card1/>
    </>
    /* <Header/>
    <Food/>
    <Footer/> */
/* <>
    <Card/>
   Card1
    </> */
   );
}

export default App
