import "./_trialLesson.scss";
import Button from "../button/Button"
// import { useDispatch } from 'react-redux';
// import { openModal } from '../../utils/Actions';
import Modal from "../modal/Modal";
import { useState } from "react";

const TrialLesson = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const togglePopup = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  // const dispatch = useDispatch();
  return (
    <section className="trialLesson">
      <div className="container">
        <h2 className="trialLesson-title">Запишитесь на бесплатное пробное занятие</h2>
        <div className="trialLesson-wrapper">
          <p>Приходите к нам в гости и мы познакомим вас с педагогами, расскажем о школе и ответим на все ваши вопросы</p>
          <Button
            text={"Записаться"}
            btnStyle={"yellow-btn"}
            // togglePopup={togglePopup}
            />
            {/* {isModalOpen && <Modal onOpen={togglePopup} onClose={togglePopup} 
            />} */}
        </div>
      </div>
    </section>
  )
}

export default TrialLesson;