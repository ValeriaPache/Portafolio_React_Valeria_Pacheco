import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJava,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import '../Pages/Skills/Skills.css'

import { ASkills } from "./aSkills"; // Importa el componente

export const LiSkills = () => {
  return (
    <li className="liSkills">
      <ASkills className="iconSkills" name={FaHtml5} title="Html" /> {/* Pasamos el icono como componente */}
      <li className="liSkills">
        <ASkills name={FaCss3 } title="Css" /> {/* Pasamos el icono como componente */}
      </li>
      <li>
        <ASkills name={FaReact} title="React" /> {/* Pasamos el icono como componente */}
      </li>
      <li>
        <ASkills name={FaJava} title="Java" /> {/* Pasamos el icono como componente */}
      </li>
      <li>
        <ASkills name={IoLogoJavascript} title="JavaScript" /> {/* Pasamos el icono como componente */}
      </li>
      <li>
        <ASkills name={SiMongodb} title="MongoDB" /> {/* Pasamos el icono como componente */}
      </li>
      <li>
        <ASkills name={GrMysql} title="MySqlWorbeach" /> {/* Pasamos el icono como componente */}
      </li>
    </li>
    
    
  );
};
