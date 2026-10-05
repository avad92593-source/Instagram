import React from 'react'
import {House,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  PlusSquare,
  CircleUserRound,
  Menu,
  AtSign} from 'lucide-react'

function Sidebar() {
  return (
    <>
    <div className="fixed left-0 top-0 w-64 ml-4 h-screen flex flex-col ">
        <div className="ml-5 ">
            <div><img className="w-40 m-4 ml-0 h-20 bg-gray-400" src="./src/assets/insta-text-1.webp" alt="" /></div>
            <div className="flex gap-4 font-bold mb-5"><House size={24}/>Home</div>
            <div className="flex gap-4 font-bold mb-5"><Search size={24}/>Search</div>
            <div className="flex gap-4 font-bold mb-5"><Compass size={24}/>Explore</div>
            <div className="flex gap-4 font-bold mb-5"><Clapperboard size={24}/>Reels</div>
            <div className="flex gap-4 font-bold mb-5"><MessageCircle size={24}/>Message</div>
            <div className="flex gap-4 font-bold mb-5"><Heart size={24}/>Notification</div>
            <div className="flex gap-4 font-bold mb-5"><PlusSquare size={24}/>Create</div>
            <div className="flex gap-4 font-bold mb-5"><CircleUserRound size={24}/>Profile</div>
        </div>
        <div className="mt-auto ml-4">
            <div  className="flex gap-4 font-bold mb-5"><AtSign size={24}/>Threads</div>
            <div  className="flex gap-4 font-bold mb-5"><Menu size={24}/>More</div>
        </div>
    </div>    
    </>
  )
}

export default Sidebar