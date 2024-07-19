import React from 'react'
import NavLink from './components/NavLink'
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComments } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 md:flex flex-col items-center space-y-3  p-2 rounded-l-3xl hidden'>
        <NavLink icon={<FaHome/>} path='/'/>
        <NavLink icon={<FaUser/>} path='/about'/>
        <NavLink icon={<FaBriefcase/>} path='/resume'/>
        <NavLink icon={<FaEnvelope/>} path='/contact'/>
        <NavLink icon={<FaComments/>} path='/blog'/>
    </div>
  )
}

export default Navbar