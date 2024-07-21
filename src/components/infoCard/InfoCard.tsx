import { experienceInterface } from '@/interface/experience_interface';
import React from 'react'
import { FaBriefcase } from "react-icons/fa";
const InfoCard:React.FC<experienceInterface> = ({tenure,company,role,desc}) => {
  return (
    <div>
       <div className='flex items-center gap-4'>
            <div className='bg-base-content text-primary text-2xl  rounded-full w-max p-3'><span><FaBriefcase /></span></div>
            <span className='badge badge-outline'>{tenure}</span>
       </div>
       <div className='md:px-12 px-2 border-l-2 ml-[24px] w-max border-base-300 text-primary'>
            <h1><strong>{role}</strong> <span className='text-zinc-500'>- {company}</span></h1>
            <p className='py-2 text-wrap'>{desc}</p>
       </div>
    </div>
  )
}

export default InfoCard