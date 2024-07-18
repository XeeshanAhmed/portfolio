'use client'
import Button from '@/components/button/Button';
import Image from 'next/image'
import React from 'react'
import { GoDash } from "react-icons/go";
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from "react-icons/fa6";
import styles from'./style.module.css'

const page = () => {
  return (
    <div className='flex justify-evenly items-center md:flex-row flex-col-reverse mt-36'>
      <div className='m-6'>
        <Image src={'/profile_img/zeeshan.png'} alt='profile image'  width={350}  height={350} className={`border-s-[20px] border-b-[20px] border-yellow-600 rounded-t-box rounded-e-box ${styles.shadow}`}/>
      </div>
      <div className='flex flex-col justify-center items-start md:w-1/2 w-11/12'>
        <h1 className='md:text-5xl text-2xl flex justify-center items-center font-extrabold'><span><GoDash className='text-7xl '/></span>I'm Zeeshan Ahmad.</h1>
        <div className='md:text-5xl text-2xl text-white text-center mt-4 font-extrabold ml-16'>
          <Typewriter
            options={{
            strings: ['Web Developer.', 'UI/UX Designer.'],
            autoStart: true,
            loop: true,
            cursor:'●',
            delay:50,
            cursorClassName:'text-yellow-600',
          }}
        /></div>
        <p className='text-white my-6 leading-8 tracking-wider md:text-left text-center'>I'm a Punjab-based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
        </p>
        <div className='mx-auto md:mx-0 my-3 md:my-0'><Button icon={<FaArrowRight />}>MORE ABOUT ME</Button></div>
      </div>
    </div>
  )
}

export default page