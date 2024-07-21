import React from 'react'
import { buttonInterface } from '@/interface/button_interface'

const Button:React.FC<buttonInterface> = ({children,icon,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='flex justify-around items-center border w-60 border-base-content rounded-full hover:bg-base-content transition-colors duration-500'>
            <span className='text-primary font-bold ml-6'>{children}</span>
            <span className='bg-base-content text-primary font-extrabold p-5 rounded-full -mr-2 '>{icon}</span>
        </button>
    </div>
  )
}

export default Button