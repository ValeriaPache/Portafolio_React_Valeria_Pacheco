import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJava,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import '../Pages/Skills/Skills.css'

import { ASkills } from "./aSkills"; // Importa el componente

export const LiSkills = () => {
  return (
    <ul className="liSkills">
      <ASkills className="iconSkills" name={FaHtml5} title="Html" /> 
      <ASkills name={FaCss3 } title="Css" /> 
      <ASkills name={FaReact} title="React" /> 
      <ASkills name={FaJava} title="Java" /> 
      <ASkills name={IoLogoJavascript} title="JavaScript" /> 
      <ASkills name={SiMongodb} title="MongoDB" /> 
      <ASkills name={GrMysql} title="MySqlWorbeach" /> 
    </ul>
    
    
  );
};
