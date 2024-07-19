"use client"
import Link from 'next/link'
import React from 'react'
import { NavlinkInterface } from '@/interface/navlink_interface'
import { usePathname } from 'next/navigation'

const NavLink:React.FC<NavlinkInterface> = ({icon,path,className}) => {
  const pathname=usePathname();
  return (
    <Link href={path} className={`${pathname===path? `text-yellow-50 bg-yellow-600`:` text-yellow-500 bg-zinc-700`}  text-2xl  w-14 h-14 mx-auto rounded-full flex justify-center items-center hover:bg-yellow-600 hover:text-white transition-colors ${className}`}>{icon}</Link> 
  )
}
 const activestate:React.CSSProperties={
  color:'white',
  backgroundColor:'yellow',
 }
export default NavLink