'use client';

import { Sidebar } from 'flowbite-react';
import { createContext, useRef, useState } from 'react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { CiBellOn } from "react-icons/ci";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegHandPaper } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { TiBook } from "react-icons/ti";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BiSolidCircleHalf } from "react-icons/bi";
import { IoShareOutline } from "react-icons/io5";
import { PiArchive } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom';
function Dasbord() {
  let [displayhide, setdisplay] = useState(false)

  return (
    <div className=''>

      <Sidebar className='w-[200px] md:w-[270px]' style={{ height: '100vh',fontFamily:'sans-serif' }}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            <NavLink to={'/example'} className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-500' : 'bg-gray-600'}>  <Sidebar.Item href="#" icon={HiChartPie}>
              <div className='flex items-center justify-between'>
                <a>refero team</a>
                <CiBellOn className='' />

              </div>
            </Sidebar.Item>
            </NavLink>
            <form action="" className='flex items-center justify-between px-1.5 ' style={{ height: '10px !important' }}>
              <input type="text" placeholder='$ Ask your Al assistant' className='rounded-lg w-[80%] text-[10px]' style={{ height: '10px !important' }} />
              <CiSearch className='pr-2.5 bg-white text-3xl ' style={{ alignSelf: 'center' }} />

            </form>
            <div className='flex flex-col  p-2.5 bg-slate-200 rounded-lg mt-[2px] mb-2.5'>
              <a className=' text-[9px] lg:text-[14px] md:text-[14px]'>Your team used 8/50 free docs</a>
              <a className='text-[8px] md:text-[11px]  lg:text-[11px]'>Upgrade to create unlimited docs</a>
            </div>

            <Sidebar.Item href="#" icon={CiClock2}>
              Catch up
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={LuMessagesSquare}>
              Discussions
            </Sidebar.Item>
            <Sidebar.Item href="#" className='my-1.5'>

              <a className='font-semibold'>Favorites</a>
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={FaRegHandPaper}  >
              Getting started
            </Sidebar.Item>
            <NavLink to='/'  > <Sidebar.Item href="#" className='mt-4 mb-2.5 font-bold'>
              My channels
            </Sidebar.Item>
            </NavLink>
            <NavLink to='/My Private channel/getting Started'>  <div onClick={(e) => {
              e.preventDefault();
              if (displayhide) {
                setdisplay(false);
              }
              else {
                setdisplay(true);
              }
            }}>
              <div className='flex items-center  px-1.5 '>
                {!displayhide ? <RiArrowDropRightFill className='text-2xl' /> : <MdOutlineArrowDropDown className='text-2xl' />}
                <CiLock className='text-2xl pr-1.5' />
                <a> My private channel </a>

              </div>
            </div>
            </NavLink>

            {!displayhide ?
              <div style={{ display: 'none', visibility: 'hidden' }} >
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-500' : 'bg-gray-600'}><div className='flex items-center  px-1.5  '    >
                  <FaRegHandPaper />
                  <a className='pr-2.5'> Getting started </a>
                </div></NavLink>
              </div>
              :
              <div style={{ display: 'block', visibility: 'visible', marginLeft: '50px' }}>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-500' : 'bg-gray-600'}><div className='flex items-center   '     >
                  <a className='pr-2.5'><FaRegHandPaper /></a>
                  <a> Getting started </a>
                </div>
                </NavLink>
              </div>
            }


            <div className='flex items-center   px-1.5 ' style={{ margin: '11px 0' }}>
              <RiArrowDropRightFill className='text-2xl' />
              <CiLock className='text-2xl pr-1.5' />
              <a> Engineering </a>

            </div>
            <div className='flex items-center   px-1.5 ' style={{ margin: '11px 0' }}>
              <RiArrowDropRightFill className='text-2xl' />
              <CiLock className='text-2xl pr-1.5' />
              <a> Product </a>

            </div>

          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className='mt-[4rem]'>
            <Sidebar.Item href="#" icon={MdOutlinePersonAddAlt}>
              Add people
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiSolidCircleHalf}>
              Templates
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={IoShareOutline}>
              Shared with me
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={PiArchive}>
              Archive
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

    </div>
  );
}

export default Dasbord
