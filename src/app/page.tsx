"use client"
import Button from '@/components/button/Button';
import Image from 'next/image'
import React from 'react'
import { GoDash } from "react-icons/go";
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router=useRouter();
  return (
    <div className='flex justify-evenly items-center md:flex-row flex-col md:mt-36 mt-14 '>
      <div className='md:m-6 m-14'>
        <Image src={'/profile_img/xeeshan.png'} alt='profile image' width={350}  height={350} className='md:border-s-[20px] md:border-b-[20px] border-base-300 md:border-base-content  md:rounded-t-xl md:rounded-b-lg md:rounded-e-xl md:rounded-none rounded-full border-[5px]  md:border-0 '/>
      </div>
      <div className='flex flex-col justify-center items-start md:w-1/2 w-11/12'>
        <h1 className='md:text-5xl text-2xl flex justify-center md:justify-start items-center font-extrabold w-full'><span><GoDash className='text-7xl hidden md:block '/></span><span>I&apos;m Zeeshan Ahmad.</span></h1>
        <h1 className='md:text-5xl text-2xl text-primary mt-4 font-extrabold text-center sm:text-left ml-0 sm:ml-[68px]  w-full'>
          <Typewriter
            options={{
            strings: ['Software Developer.','Tech Enthusiast.','Logic Builder.'],
            autoStart: true,
            loop: true,
            cursor:'●',
            delay:50,
            cursorClassName:'text-base-content',
            wrapperClassName:'text-center'
          }}
        /></h1>
        <p className='text-primary my-6 leading-8 md:tracking-wider md:text-left text-center'>I&apos;m a Punjab-based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
        </p>
        <div className='mx-auto md:mx-0 my-3 md:my-0'><Button icon={<FaArrowRight />} onClick={()=>router.push('/about')}>MORE ABOUT ME</Button></div>
      </div>
    </div>
  )
}

export default Page