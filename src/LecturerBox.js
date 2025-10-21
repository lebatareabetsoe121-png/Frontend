import React from "react";

function LecturerBox({ icon, title, subtitle }) {
  return (
    <div className="cards" onClick={() => console.log(`${title} clicked!`)}>
    
      <div className="ic">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
    
  );
}

export default LecturerBox;
