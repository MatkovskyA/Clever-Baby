import "./_trialLesson.scss";
import Button from "../button/Button"

const TrialLesson = () => {
  return (
    <section className="trialLesson">
      <div className="container">
        <h2 className="trialLesson-title"> 
          Запишитесь на бесплатное пробное занятие </h2>
        <div className="trialLesson-wrapper">
          <p>Приходите к нам в гости и мы познакомим вас с педагогами, расскажем о школе и ответим на все ваши вопросы</p>
          <Button
            text={"Записаться"}
            btnStyle={"yellow-btn"}
            />
        </div>
      </div>
    </section>
  )
}

export default TrialLesson;