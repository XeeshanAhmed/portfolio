import { experienceInterface } from '@/interface/experience_interface';
import React from 'react'
import { FaBriefcase } from "react-icons/fa";
const InfoCard:React.FC<experienceInterface> = ({tenure,company,role,desc}) => {
  return (
    <div>
       <div className='flex items-center gap-4'>
            <div className='bg-yellow-600 text-white text-2xl  rounded-full w-max p-3'><span><FaBriefcase /></span></div>
            <span className='badge badge-accent'>{tenure}</span>
       </div>
       <div className='px-12 border-l ml-[24px] w-max border-zinc-500 text-white'>
            <h1><strong>{role}</strong> <span className='text-zinc-400'>- {company}</span></h1>
            <p className='py-2'>{desc}</p>
       </div>
    </div>
  )
}

export default InfoCard