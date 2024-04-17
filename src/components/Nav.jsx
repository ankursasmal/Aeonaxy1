import React, {  useRef} from 'react'
 
import { CiBellOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
 function Nav() {
    let display=useRef("")
  return (
    <div> 
    <div ref={display} className=' navbar  md:h-[4vh] h-[3vh] lg:h-[5vh] 2xl:h-[6vh]  bg-blue-500 px-3 md:px-2 '>
    <div   className='flex items-center justify-between pt-2  md:pt-2 lg:pt-4  '>
      <a></a>
           <a className='text-white text-[1vw]'>Enable browser notifications to avoid missing out on important activity.</a>
       
        <div className='flex items-center justify-between pl-2  '> 
        <button className='rounded-lg bg-blue-600 flex items-center justify-between pl-[1vw] md:py-[.6vh] py-[.5vh]'>
          <CiBellOn className='text-white text-[1.5vw]  '/>
 <a className='text-white  md:text-[1vw] text-[.85vw] px-[1vw]'>Enable notifications</a></button>
 <IoMdClose className='mx-[.8vw] text-white text-[1.5vw]' onClick={(e)=>{e.preventDefault();   display.current.style.display='none';  }} />


  </div>
      </div>
    </div>
    </div>
  )
}

export default Nav
