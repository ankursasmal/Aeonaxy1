 import React from 'react'
import Dasbord from './components/Dasbord'
import Nav from './components/Nav'
import GettingStarted from './components/GettingStarted'
 import {   Outlet } from 'react-router-dom'
import DasbordHader from './components/DasbordHader'
 function App() {
   return (
     <div >
      <Nav/>
      <div className='flex'> 
             <Dasbord/>
             <div className='flex flex-col '> 
             <DasbordHader/>
             <Outlet/>
             </div>
      </div>
     </div>
   )
 }
 
 export default App
 