import React from 'react'
// for use img it also import like components
import imgbar from '../assets/imgbar.png'

function GettingStarted() {
  return (
    <div className='h-[100vh] sm:mx-[2vw] md:mx-[7vw] lg:mx-[15vw]  '>
      <div className='flex flex-col   '>
<h1 className='font-bold pb-[2.2vh] text-[4vh]'>Getting started</h1>
<div className='flex flex-col p-[1.5vw] bg-slate-50'>
     <a style={{paddingBottom:'2.2vh'}}>This doc is in your <b> private channel</b>, where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use <b> workspace channels</b>.</a>

<a> You can make channels <b> public </b>to make all docs visible to everyone on the team, or <b> private</b>  if you want the channel's docs to only be visible by a selection of</a>
 </div>
 <a className='mt-[2vh] mb-[1.1vh] text-[4vh] font-semibold line-height-1'>Collaborate with your team with these three features</a>
     <div className='flex items-center'>
        <img src="https://c8.alamy.com/comp/2HTAMT5/writing-hand-hold-pen-color-icon-vector-illustration-2HTAMT5.jpg" alt="" className='w-[5vw] md:w-[3vw] lg:w-[3vw]' />
        <a className='text-[4vh] font-semibold pl-[2vw]'>Doc</a>
     </div>
<div className='flex flex-col  mt-[1.7vh]'>
<img src={imgbar} alt="" />    
<div className='flex items-center mt-[.75vh] p-[1vh] bg-slate-200'>
<img src="https://static.vecteezy.com/system/resources/previews/009/385/277/non_2x/colored-light-bulb-clipart-design-illustration-free-png.png" alt="" className='w-[1vw]'/>
  <a>Give it a go by typing / below</a>
</div>
</div>
  </div>
    </div>
  )
}

export default GettingStarted
