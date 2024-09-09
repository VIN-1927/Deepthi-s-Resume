import React, {useState} from 'react'
import  "./Button.scss";

const Button = () => {

  const [expanded, setExpanded] = useState(false)

  const handleExpand = () =>{
    setExpanded(!expanded);

  };
  return (
    <button
      className={`Button ${expanded ? 'expanded' : ''}`}

      onClick={handleExpand}>
View Resume
    </button>
  )
}

export default Button;