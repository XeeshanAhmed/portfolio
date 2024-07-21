import { projectInterface } from '@/interface/project_interface'
import Link from 'next/link'
import React from 'react'
import { SiGithub } from "react-icons/si";


const Card:React.FC<projectInterface> = ({image,title,desc,link}) => {
  return (
        <div className="card glass w-96 shadow-md shadow-neutral">
            <figure>
                <img
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-primary'>{desc}</p>
                <div className="card-actions justify-end">
                    <Link href={link} className='btn btn-active shadow-sm shadow-base-content hover:scale-105 hover:shadow-md hover:shadow-base-content transition-all duration-500 flex items-center space-x-1'><span><SiGithub/></span><span>GitHub</span></Link>
                </div>
            </div>
        </div>
  )
}

export default Card