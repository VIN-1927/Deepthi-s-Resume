import React from "react";
import "../../App.css";

const Qualifications = () => (
  <div>
    <h3
        style={{
          textShadow:
            "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff, 0 0 16px #fff, 0 0 18px #fff",
        }}
      >
        EDUCATION AND TRAINING
      </h3>
    <div className="banner">
      <div className="text">
        <h6 className="animated">
        <ul className="education-list" >
          <li><strong>*Member of the British Computer Society</strong> <br />[IT Professional]</li>
        
          <li><strong>*Diploma of Information Technology [Advanced Programming]</strong><br />
              Holmesglen Institute of TAFE 2023-2024</li>
          <li><strong>*Diploma of Web Development</strong> <br /> Holmesglen Institute of TAFE 2022</li>
          
          <li><strong>*Certificate IV Web Development</strong> <br />  Holmesglen Institute of TAFE 2021</li>
         
          <li><strong>*Diploma of Early Childhood Education and Care</strong> <br />  Swinburne University 2016</li>
         
          <li><strong>*Certificate of Education Support (Integration Aide/Teacher Aide)</strong> <br /> Monash University 2013</li>
         
          <li><strong>*Bachelor of Science and Education (P-12)</strong> <br /> RMIT University 2012</li>
         
        </ul>
        </h6>
      </div>
    </div>
  </div>
);

export default Qualifications;
