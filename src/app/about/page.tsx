import GithubCalender from '@/components/githubCalender/GithubCalender'
import SkillStack from '@/components/Stacks/SkillStack'
import ToolStack from '@/components/Stacks/ToolStack'

import React from 'react' 

const aboutPage = () => {
  return (
    <div className='md:mx-28 mx-4 my-16'>
        <h1 className='md:text-6xl text-4xl text-center font-extrabold p-5 m-10'><span className='text-primary'>ABOUT</span> ME</h1>
        <div>
            <div className='text-primary  tracking-wider'>
                <p>I am based in <a href={'https://www.google.com/maps?q=Jaranwala, Pakistan'} target='_blank' rel="noopener noreferrer" className='text-base-content'>Jaranwala, Pakistan</a>.</p>
                <p>I am a Software Engineering undergraduate, persuing a Bachelor&apos;s in Software Engineering from <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" className='text-base-content'>FAST-NUCES</a>.</p>
            </div>
            <div className='my-16 '>
                <h1 className='text-center text-2xl md:text-3xl font-medium'><span className='text-primary'>Professional</span> Skillset</h1>
                <SkillStack/>
            </div>
            <div className='my-10 '>
                <h1 className='text-center text-2xl md:text-3xl font-medium'> Softwares <span className='text-primary'>I use</span></h1>
                <ToolStack/>
            </div>
            <div className='my-10 '>
                <h1 className='text-center text-2xl md:text-3xl font-medium'><span className='text-primary'>Days I </span>Code</h1>
                <GithubCalender/>
            </div>
        </div>
    </div>
  )
}

export default aboutPage