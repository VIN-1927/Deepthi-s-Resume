import React, { Component } from "react";
 
// import Button from "../components/layout/Button";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};

  render() {
    // const { twitterName } = this.props;

    return (
      <div className="header p-3">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-7 py-4">
            <h4
              style={{
                textShadow:
                  "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff,0 0 16px #fff,  0 0 18px #fff",
              }}
            >
              <bold>ABOUT ME </bold>{" "}
            </h4>
            <div className="banner">
              <p className="text">
                <p>
                  <p>
                    {" "}
                    With a solid foundation in both IT and education, I offer a unique blend of technical expertise and pedagogical experience. I am currently seeking a full-time IT Support/Administration role within an educational environment where I can leverage my skills to make a positive impact.{" "}
                  </p>
                  <p>
                    {" "}
                    My background includes a Diploma of Information Technology
                    with a focus on advanced programming and web development,
                    complemented by a range of qualifications in web
                    development, early childhood education, and educational
                    support. This diverse skill set equips me with a
                    comprehensive understanding of database management, software
                    troubleshooting, and effective communication strategies.{" "}
                  </p>

                  <p>
                    Throughout my career, I have demonstrated a keen attention
                    to detail and a proactive approach to managing complex
                    tasks. In my previous roles as an Admin/Student Teacher
                    Placement in primary schools, an Administration Officer in a
                    money transfer business, and a Teacher/IT Coordinator in Sri
                    Lanka, I have sharpened my abilities in organizing events,
                    managing databases, providing technical support, and
                    delivering exceptional customer service.
                  </p>

                  <p>
                    I excel in high-pressure environments and am known for my
                    ability to prioritize multiple tasks while meeting
                    deadlines. My strong organizational skills, coupled with a
                    mature and professional approach, enable me to work
                    harmoniously within team settings and effectively liaise
                    with individuals at all levels.
                  </p>

                  <p>
                    {" "}
                    I am passionate about fostering a positive learning
                    environment and am committed to using my IT and
                    administrative skills to support educational institutions in
                    achieving their goals.
                  </p>
                </p>{" "}
              </p>
            </div>
           
              <Link to="/next" className="btn btn-dark btn-block">
                Resume View
              </Link>
          
            
          
          </div>
        </div>
      </div>
    );
  }
}

export default About;
