import React from 'react'
import Card from './components/Card'
import { CgCPlusPlus } from "react-icons/cg";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejs } from "react-icons/di";

import { DiPostgresql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";

const SkillsStack = () => {
  return (
    <div className='my-12 flex justify-center items-center flex-wrap gap-9  '>
        <Card icon={<CgCPlusPlus/>} tooltip='C++' className=''/>
        <Card icon={<DiJava/>} tooltip='JAVA'/>
        <Card icon={<DiGit/>} tooltip='Git'/>
        <Card icon={<BiLogoTypescript/>} tooltip='TypeScript'/>
        <Card icon={<DiJavascript1/>} tooltip='JavaScript'/>
        <Card icon={<DiReact/>} tooltip='React'/>
        <Card icon={<DiNodejs/>} tooltip='Node JS'/>
        <Card icon={<SiNestjs/>} tooltip='Nest JS'/>
        <Card icon={<DiMysql/>} tooltip='MySql'/>
        <Card icon={<DiPostgresql/>} tooltip='Postgre'/>

    </div>
  )
}

export default SkillsStack