import React from "react";

export const ASkills = ({ name: Icon, title }) => { 
  return (
    <a className="icon">
      {Icon && <Icon />} {/* Renderiza el icono correctamente */}
      {title}
    </a>
  );
};
