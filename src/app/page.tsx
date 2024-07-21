"use client"
import Button from '@/components/button/Button';
import Image from 'next/image'
import React from 'react'
import { GoDash } from "react-icons/go";
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa6";
import styles from'./style.module.css'
import { useRouter } from 'next/navigation';

const page = () => {
  const router=useRouter();
  return (
    <div className='flex justify-evenly items-center md:flex-row flex-col md:mt-36 '>
      <div className='m-6'>
        <Image src={'/profile_img/zeeshan.png'} alt='profile image'  width={350}  height={350} className={`md:border-s-[20px] md:border-b-[20px] border-base-300 md:rounded-t-box md:rounded-e-box md:rounded-none rounded-full border-4  md:border-0 `}/>
      </div>
      <div className='flex flex-col justify-center items-start md:w-1/2 w-11/12'>
        <h1 className='md:text-5xl text-2xl flex justify-center md:justify-start items-center font-extrabold w-full'><span><GoDash className='text-7xl hidden md:block '/></span><span>I'm Zeeshan Ahmad.</span></h1>
        <div className='md:text-5xl text-2xl text-primary mt-4 font-extrabold text-center'>
          <Typewriter
            options={{
            strings: ['Web Developer.', 'UI/UX Designer.'],
            autoStart: true,
            loop: true,
            cursor:'●',
            delay:50,
            cursorClassName:'text-base-content',
            wrapperClassName:'text-center ml-20'
          }}
        /></div>
        <p className='text-primary my-6 leading-8 md:tracking-wider md:text-left text-center'>I'm a Punjab-based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
        </p>
        <div className='mx-auto md:mx-0 my-3 md:my-0'><Button icon={<FaArrowRight />} onClick={()=>router.push('/about')}>MORE ABOUT ME</Button></div>
      </div>
    </div>
  )
}

export default page