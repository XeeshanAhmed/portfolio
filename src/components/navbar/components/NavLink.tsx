import Link from 'next/link'
import React from 'react'
import { NavlinkInterface } from '@/interface/navlink_interface'

const NavLink:React.FC<NavlinkInterface> = ({icon,path,className}) => {
  return (
    <Link href={path} className={`${className} text-yellow-500 text-2xl bg-zinc-700 w-14 h-14 mx-auto rounded-full flex justify-center items-center hover:bg-yellow-600 hover:text-white transition-colors`}>{icon}</Link> 
  )
}

export default NavLink