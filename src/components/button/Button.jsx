import { useState } from "react";
import "../../assets/styles/_variables.scss"
import { useDispatch } from 'react-redux';
import { openModal } from '../../utils/Actions';
import Modal from "../modal/Modal";

const Button = ({ text, btnStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <button className={`btn ${btnStyle}`}
        style={{
          backgroundColor: isOpen && "#4ffcab",
        }}
        onClick={toggleModal}
      >
        {text}
      </button>
      {isOpen && <Modal handleClose={toggleModal} />}
    </>
  )
}

export default Button;