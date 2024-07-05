import "./_modal.scss";
import { useState, useEffect } from "react";

const Modal = ({ handleClose }) => {

  const [isOpen, setIsOpen] = useState(true);

  // const closePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const modal = document.querySelector('.popup-content');
      if (isOpen && modal && !modal.contains(e.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="popup">
          <form className="popup-content">
            <span className="close-btn" onClick={handleClose}>✖️</span>
            <input type="text" placeholder="Укажите ФИО" />
            <input type="email" placeholder="Укажите ваш email" />
            <input type="tel" placeholder="Укажите ваш моб.телефон с +7" />
            <textarea type="text" placeholder="Комментарии" />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};


export default Modal;