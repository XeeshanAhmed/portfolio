import React from 'react'
import NavLink from './components/NavLink'
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComments } from 'react-icons/fa';
import { PiReadCvLogoFill } from "react-icons/pi";
import { HiPresentationChartLine } from "react-icons/hi";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 md:flex flex-col items-center space-y-5  p-2 rounded-l-3xl hidden'>
        <NavLink icon={<FaHome/>} path='/'/>
        <NavLink icon={<FaUser/>} path='/about'/>
        <NavLink icon={<PiReadCvLogoFill/>} path='/resume'/>
        <NavLink icon={<HiMiniPresentationChartLine/>} path='/project'/>
        <NavLink icon={<FaEnvelope/>} path='/contact'/>
    </div>
  )
}

export default Navbar