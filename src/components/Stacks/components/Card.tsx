import React from 'react'
import { CardInterface } from '@/interface/card_interface'

const Card:React.FC<CardInterface> = ({icon,className,tooltip}) => {
  return (
    <div className={`w-44 h-32 m-4 flex justify-center items-center rounded-md  shadow-md shadow-yellow-500 hover:shadow-lg hover:shadow-yellow-500 hover:scale-105 text-7xl transition-all duration-500 delay-100 tooltip tooltip-top ${className}`} data-tip={tooltip}>
        {icon}
    </div>
  )
}

export default Card