import React from 'react'
import { CardInterface } from '@/interface/card_interface'

const Card:React.FC<CardInterface> = ({icon,className}) => {
  return (
    <div className={`w-20 h-20 flex justify-center items-center shadow-lg`}>
        {icon}
    </div>
  )
}

export default Card