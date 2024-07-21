import { statInterface } from '@/interface/stat_card_interface'
import { GoDash } from "react-icons/go";
import React from 'react'

const Card:React.FC<statInterface> = ({stat,desc}) => {
  return (
    <div className="stat shadow-md shadow-base-content w-auto md:h-max rounded-xl">
        <div className="stat-value text-base-cshadow-base-content text-3xl md:text-7xl">{stat}<sup>+</sup></div>
        <div className='flex items-center '>
            <span><GoDash className='text-xl md:text-5xl text-base-300 font-bold '/></span>
            <div className="stat-desc text-primary text-lg">{desc}</div>
        </div>
    </div>
  )
}

export default Card