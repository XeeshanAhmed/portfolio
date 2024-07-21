"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComments } from 'react-icons/fa';
import { PiReadCvLogoFill } from "react-icons/pi";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { CgGitFork } from "react-icons/cg";
import { IoMdStar } from "react-icons/io";

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="relative w-max  md:hidden">
        <button onClick={toggleDrawer} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
          <svg className="h-8 w-8 text-base-content" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      <div className={`fixed top-0 right-0 z-10 h-3/4 rounded-s-2xl  w-64 bg-base-300 transform transition-all duration-500  ${isDrawerOpen ? 'translate-x-0 shadow-md shadow-base-content' : 'translate-x-full'} md:hidden`}>
        <button onClick={toggleDrawer} className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
          <svg className="h-8 w-8 text-base-content" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className='flex flex-col items-center space-y-20'>
            <div className="flex flex-col items-center space-y-7 mt-16 p-5 text-xl">
            <Link href='/' onClick={handleLinkClick} className='flex justify-between items-center gap-2'><FaHome/><span>Home</span></Link>
            <Link href='/about' onClick={handleLinkClick} className='flex justify-between items-center gap-2'><FaUser/><span>About</span></Link>
            <Link href='/resume' onClick={handleLinkClick} className='flex justify-between items-center gap-2'><PiReadCvLogoFill/><span>Resume</span></Link>
            <Link href='/project' onClick={handleLinkClick} className='flex justify-between items-center gap-2'><HiMiniPresentationChartLine/><span>Projects</span></Link>
            <Link href='/contact' onClick={handleLinkClick} className='flex justify-between items-center gap-2'><FaEnvelope/><span>Contact</span></Link>
            </div>
            <button className='btn text-3xl w-3/5 '>
                <Link href={'https://github.com/XeeshanAhmed/portfolio'} target='_blank' rel='noopener noreferrer' className='flex'>
                    <span><CgGitFork/></span>
                    <span><IoMdStar/></span>
                </Link>
            </button>
        </div>
      </div>
    </>
  );
}

export default MobileDrawer;


// import Link from 'next/link'
// import React from 'react'

// const Drawer = () => {
//   return (
//     <div className='md:hidden fixed right-0 m-5'>
//         <div className="drawer drawer-end">
//             <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content">
//                 {/* Page content here */}
//                 <label htmlFor="my-drawer" className="drawer-button  shadow-md shadow-base-content">
//                 <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//                 </label>
//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//                 <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//                 {/* Sidebar content here */}
//                 <li><Link href={'/'}>Home</Link></li>
//                 <li><Link href={'/about'}>About</Link></li>
//                 <li><Link href={'/resume'}>Resume</Link></li>
//                 <li><Link href={'/project'}>Projects</Link></li>
//                 <li><Link href={'/contact'}>Contact</Link></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Drawer