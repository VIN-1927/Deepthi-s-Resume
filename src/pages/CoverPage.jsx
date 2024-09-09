import React from "react";
 import "./styles.scss";
 import Image from '../pages/image.jsx'

 



function CoverPage({ onShow, handleOnShow }) {
  const coverPageClass = !onShow ? "cover-page full-screen" : "cover-page";

  return (
    <div className={coverPageClass}>
 <Image />
      <button onClick={handleOnShow}>
        {onShow ? "Hello" : "Exit"}
      </button>
    
    
    </div>
   
  );
}

export default CoverPage;
