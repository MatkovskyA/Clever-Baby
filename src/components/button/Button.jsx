import { useState } from "react";
import "../../assets/styles/_variables.scss"

const Button = ({ text, btnStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button className={`btn ${btnStyle}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered && "#4ffcab", 
      }}
    >
      {text}
    </button>
  )
}

export default Button;