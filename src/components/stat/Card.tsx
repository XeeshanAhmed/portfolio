import { statInterface } from '@/interface/stat_card_interface'
import { GoDash } from "react-icons/go";
import React from 'react'

const Card:React.FC<statInterface> = ({stat,desc}) => {
  return (
    <div className="stat shadow-md shadow-yellow-600 w-auto h-max rounded-xl">
        <div className="stat-value text-yellow-600 text-7xl">{stat}<sup>+</sup></div>
        <div className='flex gap-3 items-center '>
            <span><GoDash className='text-5xl text-gray-500 font-bold '/></span>
            <div className="stat-desc text-primary text-lg">{desc}</div>
        </div>
    </div>
  )
}

export default Card