import Button from '@/components/button/Button'
import Card from '@/components/stat/Card'
import { PiDownloadBold } from "react-icons/pi";
import React from 'react'
import Link from 'next/link';
import InfoCard from '@/components/infoCard/InfoCard';

const resumePage = () => {
  return (
    <div className='md:mx-28 mx-4 my-16'>
        <h1 className='text-4xl md:text-6xl text-center font-extrabold p-5 m-10'><span className='text-primary'>RE</span>SUME</h1>
        <h1 className='text-2xl md:text-3xl font-medium text-center mb-8'>Personal <span className='text-primary'>Information</span></h1>
        <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-full md:w-1/2 '>
                <div className='text-primary ps-3 flex flex-wrap justify-between flex-none md:tracking-wider mb-3'>
                    <p className='md:w-1/2 my-3'>First Name: <strong className=''>Zeeshan</strong></p>
                    <p className='md:w-1/2 my-3'>Last Name: <strong>Ahmad</strong></p>
                    <p className='md:w-1/2 my-3'>Age: <strong>21 Years</strong></p>
                    <p className='md:w-1/2 my-3'>Nationality: <strong>Pakistani</strong></p>
                    <p className='md:w-1/2 my-3'>Phone: <strong>+923011683998</strong></p>
                    <p className='md:w-1/2 my-3'>Address: <strong>Jaranwala</strong></p>
                    <p className='md:w-1/2 my-3'>Freelance: <strong className='text-green-500'>Available</strong></p>
                    <p className='md:w-1/2 my-3'>Languages: <strong>English,Urdu</strong></p>
                    <p className='my-3'>Email: <strong>xeeshanahmad348@gmail.com</strong></p>
                </div>
                <div className='w-min rounded-full'><Link href={'/resume/Zeeshan Ahmad.pdf'} target='_blank' rel='noopener noreferrer'><Button icon={<PiDownloadBold className='text-2xl'/>}>DOWNLOAD CV</Button></Link></div>
            </div>
            <div className='w-full md:w-5/12 px-2 md:px-12 mt-8 md:mt-0'>
                <div className='flex justify-between items-center flex-col md:flex-row flex-wrap gap-3'>
                    <Card stat={1} desc='Years of experience'/>
                    <Card stat={4} desc='Completed Projects'/>
                </div>
            </div>
        </div> 
        <div className='mt-8'>
            <h1 className='text-2xl md:text-3xl font-medium text-center'><span className='text-primary'>Experience </span>& Education</h1>
            <div className='flex justify-between flex-col md:flex-row mt-8 md:px-5 gap-5'>
                <InfoCard tenure='2024 May - Present' company='Luminar Soft' role='Frontend Developer' desc='React frontend developer'/>
                <InfoCard tenure='2022 August - Present' company='FAST NUCES' role='Bachelor Degree' desc={`Bachelor's Degree in Software Engineering`}/>
            </div>
        </div>  
    </div>
  )
}
export default resumePage