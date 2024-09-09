import React from "react";

function Content() {
  return (
    <div>
      <h4
        style={{
          textShadow:
            "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff,0 0 16px #fff,  0 0 18px #fff",
        }}
      >
        {" "}
        MY SKILLS{" "}
      </h4>
<br/>
      <div className="font1" >
        <h3 className="color" style={{color:"yellow"}}><strong>Technical Skills</strong></h3>
        <ul>
          <li>
            <strong>Programming Languages: </strong>Java, HTML, CSS
          </li>
          <li>
            <strong>Web Development: </strong>React, Node.js, Express.js
          </li>
          <li>
            <strong>Databases Management: </strong>SQL, MySQL, MongoDB, Database
            Normalization
          </li>
          <li>
            <strong>Agile ProjectManagement: </strong>Trello
          </li>
          <li>
            <strong>Cloud Hosting: </strong>AWS
          </li>
          <li>
            <strong>IT Support:</strong> Troubleshooting, HW & SW installation
          </li>
          <li>
            <strong>Tools & Technologies:</strong> Git, VSCode, Docker
          </li>
        </ul>
        <br/>
        <h3 className="color" style={{color:"yellow"}}><strong>Soft Skills</strong></h3>
        <ul>
          <li>
            <strong>Communication: </strong>Effective verbal and written communication, especially in an educational stetting.
          </li>
          <li>
            <strong>Problem-Solving: </strong>Strong analytical skills and ability to resolve technical issues efficiently
          </li>
          <li>
            <strong>Adaptability: </strong>Quickly learn and implement new technologies and methodologies
          </li>
          <li>
            <strong>Team Collaboration: </strong>Experience working in agile teams and coordinating with educators and IT professionals
          </li>
          <li>
            <strong>Time Management: </strong>Ability to manage multiple projects and tasks simultaneously, ensuring timely completion
          </li>
          
        </ul>
        <br/>
        <h3 className="color" style={{color:"yellow"}}><strong>Educational Experience</strong></h3>
        <ul>
          <li>
            <strong>Teaching & Coordination: </strong>Experience as an IT coordinator and student teacher, understanding the IT needs in educational environments.
          </li>
          <li>
            <strong>Project Management: </strong>Leading and management IT projects, ensuing alignment with educational goals and standards
          </li>
          </ul>
      </div>
    </div>
  );
}

export default Content;
