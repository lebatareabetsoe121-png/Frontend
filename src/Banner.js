import React from "react";

function Banner({ image }) {
  return (

    <div className="background" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
    </div>

    </div>

    
  );
}

export default Banner;