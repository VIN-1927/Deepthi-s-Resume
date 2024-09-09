import React from 'react';

import Hero from "../components/common/Hero";
import Container from "react-bootstrap/Container";



const Home = () => {
   const values ={
     
    title: "WELCOME TO DEEPTHI'S WEB PORTFOLIO",
    content:" IT PROFESSIONAL",
    button:  <a href="./contact" className="btn btn-dark btn-block">
    Contact Me
  </a>,
    variant: "dark",

   };
   return (
    
   <Container >
<Hero values={values} />



   </Container>
 
  
   );
   };
export default Home
