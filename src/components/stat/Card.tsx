import { statInterface } from '@/interface/stat_card_interface'
import { GoDash } from "react-icons/go";
import React from 'react'

const Card:React.FC<statInterface> = ({stat,desc}) => {
  return (
    <div className="p-3 sm:p-5 shadow-md shadow-base-content md:h-max rounded-lg text-wrap flex flex-col justify-center items-center">
        <div className="stat-value text-base-cshadow-base-content text-2xl md:text-7xl">{stat}<sup>+</sup></div>
        <div className='flex items-center'>
            <span><GoDash className='text-xl md:text-5xl text-base-300 font-extrabold '/></span>
            <div className="stat-desc text-primary sm:text-lg text-wrap">{desc}</div>
        </div>
    </div>
  )
}

export default Card