import { AboutInterface } from '@/interface/about_interface';
import React from 'react'

const About:React.FC<AboutInterface> = ({icon,heading,description}) => {
  return (
    <div className='flex items-start gap-2 mt-7 '>
        <div className='text-5xl'>{icon}</div>
        <div className='text-primary space-y-1 space-x-1 text-sm'>
            <h1 className='text-accent-content'>{heading}</h1>
            <p className='font-semibold'>{description}</p>
        </div>
    </div>
  )
}

export default About