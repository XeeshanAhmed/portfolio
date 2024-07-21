import React from 'react'
import { CardInterface } from '@/interface/card_interface'

const Card:React.FC<CardInterface> = ({icon,className,tooltip}) => {
  return (
    <div className={`w-36 md:w-44 h-28 md:h-32  flex justify-center items-center rounded-md  shadow-md shadow-base-content hover:shadow-lg hover:shadow-base-content hover:scale-105 text-7xl transition-all duration-500 delay-100 tooltip tooltip-bottom ${className}`} data-tip={tooltip}>
        {icon}
    </div>
  )
}

export default Card