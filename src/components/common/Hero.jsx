import React from 'react'
import Button from "react-bootstrap/Button";


const Hero = ({values: {title, content, button, variant} }) => {
  return (
    <div className="banner" style={{ marginLeft: '0' }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <Button variant={variant}>{button}</Button>
    </div>

  
  );  
  
  
};

export default Hero
