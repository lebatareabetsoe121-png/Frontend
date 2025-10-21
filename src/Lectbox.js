import React from "react";

function Lectbox({icon, title, sub}){

    return(

        <div className="each-card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{sub}</p>
        </div>

    )
}
export default Lectbox;