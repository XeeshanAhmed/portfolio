import Link from 'next/link'
import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-primary flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 p-2 md:px-32 text-xs md:text-sm font-bold space-y-0">
      <p className='text-center'>Designed by Zeeshan Ahmad</p>
      <p className='text-center'>Copyright © {new Date().getFullYear()} - ZA</p>
      <nav className="grid-flow-col gap-4 md:gap-5 text-base md:place-self-center md:justify-self-end bg-pink-">
        <Link href={'https://github.com/XeeshanAhmed'} target='_blank' rel='noopener noreferrer'><SiGithub/></Link>
        <Link href={'/'}><FaTwitter/></Link>
        <Link href={'https://www.linkedin.com/in/zeeshan-ahmad-azeem/'} target='_blank' rel='noopener noreferrer'><FaLinkedinIn/></Link>
      </nav>
</footer>
  )
}

export default Footer