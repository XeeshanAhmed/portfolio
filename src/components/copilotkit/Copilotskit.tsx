"use client"
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import "@copilotkit/react-ui/styles.css";
import React from 'react'

interface CopilotProp{
    children:React.ReactNode;
}

const Copilotskit:React.FC<CopilotProp> = ({children}) => {
  return (
    <CopilotKit publicApiKey='ck_pub_38b555f97298642a63c5d2a346a12879'>
      <CopilotSidebar className='bg-base-contentx  rounded-full text-base-content'>
        {children}
      </CopilotSidebar>
    </CopilotKit>
  )
}

export default Copilotskit