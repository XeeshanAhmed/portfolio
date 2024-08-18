"use client"
import React, { useEffect, useState } from 'react'
import GitHubCalendar from "react-github-calendar";
import { useAppSelector } from '@/redux/hooks/hooks';
import { RootState } from '@/redux/store/store';

const GithubCalender = () => {
  const mode=useAppSelector((state:RootState)=>state);
  const [colorScheme, setcolorScheme] = useState<'light'|'dark'>("light")
  useEffect(() => {
    setcolorScheme(prevScheme => (prevScheme === 'light' ? 'dark' : 'light'));
  }, [mode])
  
  return (
    <div className='my-14 shadow-green-400 shadow-sm flex items-center justify-around text-primary'>
        <GitHubCalendar username='XeeshanAhmed' blockSize={14} fontSize={16} blockMargin={5} colorScheme={colorScheme}/>
    </div>
  )
}

export default GithubCalender