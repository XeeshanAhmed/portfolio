import React from 'react'
import Button from '../button/Button'
import { GrSend } from "react-icons/gr";

const Form = () => {
  return (
    <div>
        <form action="#" method="post" className='space-y-7 '>
            <label htmlFor="name" className='hidden'></label>
            <input type="text" id='name' placeholder='Your Name' required className='w-full md:w-max border-2 border-neutral rounded-full px-10 py-4 mr-6 focus-within:border-neutral' />
            <label htmlFor="mail" className='hidden'></label>
            <input type="email" id='mail' placeholder='Your Email' required className='w-full md:w-max border-2 border-neutral rounded-full px-10 py-4' />
            <label htmlFor="subject" className='hidden'></label>
            <input type="text" id='subject' placeholder='Your Subject' required className='w-full border-2 border-neutral rounded-full py-4 px-10' />
            <label htmlFor="message" className='hidden'></label>
            <textarea name="message" id="message" placeholder='Your Message' className='w-full border-2 border-neutral rounded-3xl py-4 px-10 h-32 ' required></textarea>
            <Button icon={<GrSend className='text-2xl'/>} >SEND MESSAGE</Button>
        </form>
    </div>
  )
}

export default Form