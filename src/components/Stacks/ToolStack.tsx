import React from "react";
import Card from "./components/Card";
import { VscVscode } from "react-icons/vsc";
import { SiVisualstudio } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiIntellijidea } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io5";
import { CgFigma } from "react-icons/cg";

const SkillsStack = () => {
  return (
    <div className="my-12 flex justify-center items-center flex-wrap gap-9 ">
      <Card icon={<IoLogoWindows/>} tooltip="Windows"/>
      <Card icon={<BiLogoVisualStudio/>} tooltip="Visual Studio Code"/>
      <Card icon={<CgFigma/>} tooltip="Figma"/>
      <Card icon={<SiIntellijidea/>} tooltip="Intellij Idea"/>
      <Card icon={<DiVisualstudio/>} tooltip="Visual Studio"/>    
    </div>
  );
};

export default SkillsStack;
