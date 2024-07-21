import Card from '@/components/project/Card'
import React from 'react'

const projectPage = () => {
  return (
    <div  className='mx-4 md:mx-28 my-10'>
        <h1 className='text-4xl md:text-6xl text-center font-extrabold p-5 m-5'><span className='text-primary'>PR0</span>JECTS</h1>
        <h1 className='text-2xl md:text-3xl font-medium text-center mb-5'>Semester <span className='text-primary'>Projects</span></h1>
        <div className='flex justify-around flex-wrap gap-5'>
            <Card image='/screenshots/1.png' title='Weather App' desc='Desktop application created in JAVA with GUI using JAVA FX.' link='/'/>
            <Card image='/screenshots/2.png' title='Bank App' desc='Desktop application created in C++ with CLI.' link='/'/>
        </div>
        <h1 className='text-3xl font-medium text-center mb-5 mt-10'><span className='text-primary'>Personal</span> Projects</h1>
        <div className='flex justify-around'>
            <Card image='/screenshots/3.png' title='World Tour Website' desc='A fully responsive frontend website created using HTML and CSS.' link='/'/>
        </div>
    </div>
  )
}

export default projectPage