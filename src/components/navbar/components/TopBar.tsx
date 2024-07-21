import MobileDrawer from '@/components/navbar/components/Drawer'
import ThemeController from '@/components/themeController/ThemeController'
import Link from 'next/link'
import React from 'react'
import { CgGitFork } from 'react-icons/cg'
import { IoMdStar } from 'react-icons/io'

const TopBar = () => {
  return (
    <div className='fixed top-[1px]  w-full bg-base-300 z-10 flex justify-between items-center px-8 py-1 rounded-b-2xl'>
        <div><ThemeController/></div>
        <div>
            <button className='btn text-2xl w-max bg-base-100 hover:scale-90 transition-all duration-300   hidden md:block '>
                <Link href={'https://github.com/XeeshanAhmed/portfolio'} target='_blank' rel='noopener noreferrer' className='flex text-base-content'>
                    <span><CgGitFork/></span>
                    <span><IoMdStar/></span>
                </Link>
            </button>
        </div>
        <div className='md:hidden block'>
            <MobileDrawer/>
        </div>
    </div>
  )
}

export default TopBar