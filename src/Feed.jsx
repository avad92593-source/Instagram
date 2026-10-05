import React from 'react'
import Postss from './Postss'
import Stories from './Stories'

function Feed() {
  return (
    <>
       <div className="m-3 h-screen "> 
           <div className=" bg-gray-200 rounded-xl"><Stories/></div>
           <div className="bg-gray-300 rounded-xl"><Postss/></div>
       </div>
    </>
  )
}

export default Feed