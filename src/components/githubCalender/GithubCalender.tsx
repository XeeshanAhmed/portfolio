import React from 'react'
import GitHubCalendar from "react-github-calendar";
import styles from './style.module.css'

const GithubCalender = () => {
  return (
    <div className='my-14 shadow-green-600 shadow-sm flex items-center justify-center'>
        <GitHubCalendar username='XeeshanAhmed' blockSize={15} fontSize={20} blockMargin={4} colorScheme='dark' style={colorScheme} />
    </div>
  )
}
const colorScheme:React.CSSProperties={
    color:"white",
    
}

export default GithubCalender