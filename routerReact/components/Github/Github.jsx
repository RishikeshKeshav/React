import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Github(){
//    const data =  useLoaderData()
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://github.com/RishikeshKeshav").
        then(res => res.json().
        then(data=>{
            console.log(data)
    setData(data)}))
    }),[]
    const {username}=useParams()
    return(
        <div >
            Github:
        </div>
    )
}


// export const githubInfoLoader = async()=>{

//    const response = await fetch("https://github.com/RishikeshKeshav")
//    return response.json()
// }