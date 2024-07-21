"use client"
import Link from 'next/link'
import React from 'react'
import { NavlinkInterface } from '@/interface/navlink_interface'
import { usePathname } from 'next/navigation'

const NavLink:React.FC<NavlinkInterface> = ({icon,path,className}) => {
  const pathname=usePathname();
  return (
    <Link href={path} className={`${pathname===path? `text-primary bg-base-content`:` text-primary bg-base-300`}  text-lg  w-12 h-12 mx-auto rounded-full flex justify-center items-center hover:bg-base-content hover:text-primary transition-colors ${className}`}>{icon}</Link> 
  )
}
export default NavLink