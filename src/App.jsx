import React from 'react'
import Sidebar from './Sidebar.jsx'
import Feed from './Feed.jsx'
import Suggestion from './Suggestion.jsx'
function App() {
  return (
    <>
         <div className="flex flex-row h-screen  ">
            <div className=" w-170 bg-white"><Sidebar/></div>
            <div className=" w-550 "><Feed/></div>
            <div className=" w-250 "><Suggestion/></div>
         </div>
           
    </>
   
  )
}

export default App