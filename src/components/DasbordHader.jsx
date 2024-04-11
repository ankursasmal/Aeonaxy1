import React, { useRef } from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiBookReadLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import '../App.css'
 function DasbordHader() {
   let {rout}=useParams();
   return (
    <div className='w-100% flex  justify-between items-center px-1 md:px-2 my-2'>
      <div className='flex items-center sm:overflow-x-auto'>
         < RiBookReadLine/>
         <IoIosArrowBack className='mx-1'/>
<IoIosArrowForward/>
<IoLockClosedOutline className='mx-1'/>
<a className='text-[9px] md:text-[14px]'>My private channel /Getting started</a>

        </div>
       <div className='flex items-center hiddendiv'>
<a className='pl-3'>Share</a>
<a className='px-[2px] md:px-3'> <BiMessageRounded  /></a>
<CiStar   />
<a className='px-[2px] md:px-3'>  <BsThreeDotsVertical  /></a>
      </div>
      </div>
  )
}

export default DasbordHader
