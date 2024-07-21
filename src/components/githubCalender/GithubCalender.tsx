import React from 'react'
import GitHubCalendar from "react-github-calendar";
import styles from './style.module.css'

const GithubCalender = () => {
  return (
    <div className='my-14 shadow-green-500 shadow-sm flex items-center justify-center text-primary'>
        <GitHubCalendar username='XeeshanAhmed' blockSize={15} fontSize={16} blockMargin={4} colorScheme='dark' style={colorScheme} />
    </div>
  )
}
const colorScheme:React.CSSProperties={
    color:"primary",
    
}

export default GithubCalender