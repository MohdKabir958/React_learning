import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {
const [data,setData] = useState([])
const [data2,setData2] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/MohdKabir958")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    },[])
    
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response)=>response.json())
        .then((data2)=>{
            console.log(data2);
            setData2(data2)
        })
    })

// const data = useLoaderData()
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white 
             p-4 text-xl flex flex-col ">
             <img className="w-64 m-auto" src={data.avatar_url} alt="Git Profile Img" width={"300px"}/>
             <p className="mt-8">Username : {data.login}</p>
                 <p>Github Followers : {data2.followers}</p>
                 <p>Github Following : {data.following}</p>
                 <p>Githb id : {data.id}</p>
                 <p>Visit My Github :- {data.url}</p>
                 <p>Github created_at : {data.created_at}</p>
             </div>
        </>
    )
}

export default Github

//optimized approach for API call using LoaderFunction

// export const githubInfoLoader = async ()=>{
//    const response = await fetch("https://api.github.com/users/MohdKabir958")
//    return response.json()

// }