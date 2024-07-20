import Link from 'next/link'
import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-white items-center p-2 px-10 text-xs font-bold ">
  <aside className="grid-flow-col items-center">
    <div className='flex gap-x-96'>
      <p>Designed by Zeeshan Ahmad</p>
     <p>Copyright © {new Date().getFullYear()} - ZA</p>
    </div>
  </aside>
  <nav className="grid-flow-col gap-5 text-base md:place-self-center md:justify-self-end">
    <Link href={'https://github.com/XeeshanAhmed'} target='_blank' rel='noopener noreferrer'><SiGithub/></Link>
    <Link href={'/'}><FaTwitter/></Link>
    <Link href={'https://www.linkedin.com/in/zeeshan-ahmad-azeem/'} target='_blank' rel='noopener noreferrer'><FaLinkedinIn/></Link>

  </nav>
</footer>
  )
}

export default Footer