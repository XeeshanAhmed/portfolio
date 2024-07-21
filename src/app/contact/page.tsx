import About from '@/components/about/About'
import React from 'react'
import { FaMap } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import Form from '@/components/about/Form';
import Link from 'next/link';


const contactPage = () => {
  return (
    <div  className='mx-4 md:mx-28 my-10'>
        <h1 className='text-4xl md:text-6xl text-center font-extrabold p-5 m-10'><span className='text-primary'>GET IN</span> TOUCH</h1>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='w-full md:w-4/12'>
            <h1 className='text-primary text-2xl my-5 tracking-wider'>Reach Me!</h1>
            <p className='text-primary text-sm'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <About heading='Address Point' description='Ahmed Park, Jaranwala.' icon={<FaMap/>}/>
            <About heading='Mail Me' description='xeeshanahmad348@gmail.com' icon={<IoMdMailOpen/>}/>
            <About heading='Call Me' description='+923011683998' icon={<FaSquarePhone/>}/>
            <div className='flex  space-x-5 mt-5 ml-2 text-primary items-center'>
             <Link href={'mailto:xeeshanahmad348@gmail.com'} target='_blank' rel='noopener noreferrer'><MdAlternateEmail className='bg-base-300 w-12 h-12 rounded-full p-3'/></Link>
             <Link href={'/'} target='_blank' rel='noopener noreferrer'><TiSocialTwitter className='bg-base-300 w-12 h-12 rounded-full p-3 '/></Link>
             <Link href={'https://www.linkedin.com/in/zeeshan-ahmad-azeem/'} target='_blank' rel='noopener noreferrer'><LiaLinkedinIn className='bg-base-300 w-12 h-12 rounded-full p-3'/></Link>
             <Link href={'https://github.com/XeeshanAhmed'} target='_blank' rel='noopener noreferrer'><IoLogoGithub className='bg-base-300 w-12 h-12 rounded-full p-3'/></Link>
            </div>
          </div>
          <div className='w-full md:w-3/5'>
              <Form/>
          </div>

        </div>
    </div>
  )
}

export default contactPage