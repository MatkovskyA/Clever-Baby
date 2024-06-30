import "./_advantages.scss"
import image from "../../assets/images/Vector-baby.png"
import Advantage from "../advantage/Advantage";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages-title">Наши преимущества</h2>
        <div className="advantages-wrapper">
          <div className="advantage-column">
            <Advantage
              decor={"decor-left"}
              title={'Развитие 10 видов интеллекта'}
              text={"Учимся общаться, развивать эмоциональный, творческий интеллект и многое другое"} />
            <Advantage
              title={'Педагоги — носители языка'}
              text={"Занятия ведут преподаватели         из США, Великобритании и Канады, для которых английский язык является родным"} />
          </div>
          <div className="advantage-column">
            <img src={image} alt={image} />
          </div>
          <div className="advantage-column">
            <Advantage
              title={'Языковое погружение'}
              text={"Занятия проходят полностью на английском языке, независимо от типа задания"} />
            <Advantage
              decor={"decor-right"}
              title={'Небольшие группы'}
              text={"Дети занимаются в группах до 5 человек, что позволяет применять индивидуальный подход к каждому"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages;