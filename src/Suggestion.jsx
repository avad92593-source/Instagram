import React from 'react'
import { useState,useEffect } from 'react';

function Suggestion() {

    const [profile, setProfile] = useState(null);
    const [suggest , setSuggest]= useState([]); 
   
         useEffect(() => {
   
           fetch('http://localhost:3000/Profile').
           then(response=> response.json()).
           then(data=> setProfile(data))
           .catch(error=> console.log(error));

           fetch('http://localhost:3000/Suggestions').
           then(response=> response.json()).
           then(data=> setSuggest(data))
           .catch(error=> console.log(error));
   
         },[])

  return (
    <>
       <div className='bg-gray-100 mt-3 mr-2 rounded-xl'>
        {profile ?
          (
            <>
              <div className=''>
                  <div className="flex flex-row justify-between">
                      <div >
                          <div className="flex flex-row  m-6 ">
                            <div><img className="w-10 h-10 m-2 ml-5 rounded-full object-cover" src={profile.profile_pic} alt="" /></div>
                            <div><h4 className="mt-3 p-1">{profile.username}</h4></div>
                          </div>  
                      </div>
                      <div  className="m-3 mr-5 p-3">
                        <div><p className="text-blue-500 mt-3 p-1 item-end justify-end">Switch</p></div>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between">
                      <div className="ml-9 mt-1 p-2 text-gray-400 font-bold">Suggested for you</div>
                      <div className="mr-6 mt-1 p-2 font-bold">see All</div>
                  </div>
              </div>
              <div>
                { suggest.length>0 ? suggest.map( sug=>{

                  return (
                    <div className="flex flex-row justify-between">
                          <div >
                              <div className="flex flex-row  m-6 ">
                                <div><img className="w-10 h-10  ml-5 rounded-full object-cover" src={sug.profile_pic} alt="" /></div>
                                <div><h4 className="mt-2 ml-2 ">{sug.username}</h4></div>
                              </div>  
                          </div>
                          <div  className="m-3 mr-5 ">
                            <div><p className="text-blue-500 mt-3 p-1">+ Follow</p></div>
                          </div>
                    </div>)
                    }
                  ):(<div>loading...</div>)
                }
              </div>
            </> 
          )
          :(<div>Loding suggestions</div>)
        }
       </div>
    </>
  )
}

export default Suggestion