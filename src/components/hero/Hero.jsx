import Rocket from "../../animation/rocket/Rocket";
import Button from "../button/Button";
import "./_hero.scss";


const Hero = () => {
  return (
    <>
      <section className="hero">
      <Rocket 
        direction={''}
      />
        <div className="container">
          <div className="hero-wrapper">
            <h1 className="hero-title">Английский язык</h1>
            <span className="hero-subtitle">для детей от 2 до 7 лет</span>
            <p className="hero-description">Гармоничное развитие детей и обучение
              через полное погружение в языковую среду </p>
            <Button
              text={"Записаться"}
              btnStyle={"yellow-btn"}
            />
          </div>
        </div>
      </section>
    </>

  )
}

export default Hero;