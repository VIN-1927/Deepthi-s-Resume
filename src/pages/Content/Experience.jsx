import React from "react";
import "../../App.css";

const Experience = () => {
  return (
    <div>
      <div className="experience">
        <h3>
          <span>
            <b>EXPERIENCE</b>
          </span>
        </h3>
        <h5>
        <h4 style={{
                textShadow:
                  "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff,0 0 16px #fff,  0 0 18px #fff"
              }}> <span>
            <b>What I am best at</b>
          </span></h4>
          
        </h5>
      </div>
      <div className="bar">
        <div className="skills dbms">97.99%</div>
        <p>Model data objects</p>
      </div>
      <div className="bar">
        <div className="skills ssadm">96.99%</div>
        <p>Model data process</p>
      </div>
      <div className="bar">
        <div className="skills html">90%</div>
        <p>HTML</p>
      </div>
      <div className="bar">
        <div className="skills css">85%</div>
        <p>CSS</p>
      </div>
      <div className="bar">
        <div className="skills js">80%</div>
        <p>JS</p>
      </div>
      <div className="bar">
        <div className="skills react">80%</div>
        <p>REACT</p>
      </div>
      <div className="bar">
        <div className="skills docker">75%</div>
        <p>DOCKER & OTHER Technologies</p>
      </div>
    </div>
  );
};

export default Experience;
