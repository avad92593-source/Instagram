import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowBigLeft , ArrowBigRight } from 'lucide-react';
function Displaystories() {

    const {id} = useParams();
    const [display, setDisplay] = useState(null);
    
          useEffect(() => {
    
            fetch('http://localhost:3000/stories/'+id).
            then(response=> response.json()).
            then(data=> setDisplay(data))
            .catch(error=> console.log(error));
    
          },[])

  return (
    <>
    { display &&
      <div className="mx-auto  w-100 flex flex-row">
        <div className="mt-85 "><button><ArrowBigLeft size={24}/></button></div>
        <div className=" mt-15 px-3"><img className="w-150 h-150" src={display.image} alt="" /></div>
        <div className="mt-85 "><button><ArrowBigRight size={24}/></button></div>
      </div>
    }
    </>
  )
}

export default Displaystories