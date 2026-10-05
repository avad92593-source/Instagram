import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Stories() {

    const navigate = useNavigate();

    const [stories, setStories] = useState([]);
    
          useEffect(() => {
    
            fetch('http://localhost:3000/stories').
            then(response=> response.json()).
            then(data=> setStories(data))
            .catch(error=> console.log(error));
    
          },[])

          function displaystory()
          {

          }

  return (
    <>
    <div className=" mb-2 bg-gray-300 rounded-xl">
        { stories.length>0 ?
        (
          <div className="flex flex-row m-2 p-2 item-center justify-center">
            {
          stories.map(story=>{
            return(
              <>
              <div className='mb-3' onClick={()=>navigate('/Displaystories/'+story.id)}>
                <div className="m-2 p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full ">
                      <div ><img className=" w-15 h-15 rounded-full object_cover " src={story.user.profile_pic} alt="" /></div>
                </div>
                <div><p className='truncate w-20'>{story.user.username}</p></div>
              </div>
             </> 
            );
          }
          )}
          </div>
        
        ):(<p>loading ...</p>)
        }
        </div>
    </>
  )
}

export default Stories