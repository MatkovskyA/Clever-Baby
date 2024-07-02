import "./_popup.scss";
import { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.popupContent')) {
        closePopup();
      }
    }

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={togglePopup}>Открыть попап</button>
      {isOpen && (
        <div className="popup">
          <div className="popupContent">
            <span className="closeButton" onClick={closePopup}>✖️</span>
            <p>Содержимое попапа</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default Popup;