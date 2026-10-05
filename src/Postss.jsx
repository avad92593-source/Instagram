import React from 'react'
import { useState , useEffect } from 'react'
import { Heart, MessageCircle, Send } from "lucide-react";
function Postss() {


      const [postss, setPostss] = useState([]);

      useEffect(() => {

        fetch('http://localhost:3000/posts').
        then(response=> response.json()).
        then(data=> setPostss(data))
        .catch(error=> console.log(error));

      },[])


  return (
    <>
        {postss.length>0 ? (postss.map(post=> 
            {
                return (
                    <div key={post.id} className="m-2 mt-8 p-2">
                      <div  className="flex flex-row mx-auto w-140 ">
                          <div className="m-2"><img className="w-10 h-10 rounded-full object-cover" src={post.user.profile_pic}></img></div>
                          <div className="m-2"><h4 className="mt-3">{post.user.username}</h4></div>
                      </div>
                      <div className="flex flex-col">
                         <div><img className="w-140 mx-auto m-2 p-2  rounded-xl " src={post.image}></img></div>
                      </div>   
                      <div className="flex gap-6 mt-2 mx-auto w-140">
                          <div><Heart size={28}/></div>
                          <div><MessageCircle size={28}/></div>
                          <div><Send size={28}/></div>
                      </div>
                      <div className="flex flex-col mx-auto w-140">
                         <div className="mt-2 font-bold">{post.likes}K Likes</div>
                         <div className="mt-2 font-bold">{post.caption}</div>
                      </div>
                    </div>  


                );
            }
        )):(
            <div><h5>loading posts</h5></div>
        )}
    </>

  )
}

export default Postss