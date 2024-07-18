import React from 'react'

const aboutPage = () => {
  return (
    <div className='mx-28 my-10'>
        <h1 className='text-6xl text-center font-extrabold p-5 m-10'><span className='text-white'>ABOUT</span> ME</h1>
        <div>
            <div className='text-white  tracking-wider'>
                <p>I am based in <a href={'https://www.google.com/maps?q=Jaranwala, Pakistan'} target='_blank' rel="noopener noreferrer" className='text-yellow-500'>Jaranwala, Pakistan</a>.</p>
                <p>I am a Software Engineering undergraduate, persuing a Bachelor's in Software Engineering from <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" className='text-yellow-500'>FAST-NUCES</a>.</p>
            </div>
            <div className='my-10 '>
                <h1 className='text-center text-3xl'><span className='text-white'>Professional</span> Skillset</h1>
                
            </div>
        </div>
    </div>
  )
}

export default aboutPage