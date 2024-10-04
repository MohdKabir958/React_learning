import React from 'react'

function  Card({username="Mohd",btnText}){
    // console.log("props :-",props)
    console.log(username)
return(
    <>
      <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="/pexels-nicole-queiroz-156397350-21555027.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{btnText}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{username}</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </>
)
}


export default Card