import Video from "../video/VideoComponent";
import "./_metodology.scss"

const Metodology = () => {

  return (
    <section className="metodology">
      <div className="container">
        <div className="metodology-wrapper">
          <h2 className="metodology-title">Как проходит обучение</h2>
          <div className="metodology-inner">
            <div className="metodology-text">
              <h3 className="metodology-text-title">Играя - обучаем, обучая - развиваем</h3>
              <div className="metodology-text-wrapper">
                <p>
                  Мы взяли все самое лучшее из традиционных    и современных методик обучения и развития детей. Обучение английскому языку происходит легко и интересно, ведь малыши не зубрят материал по учебникам, а познают его через игру, сказки, книги и музыку. 
                </p>
                <p>
                  Наша методика также включает в себя обучение по программе Cambridge. Благодаря этому, наши ученики без труда сдают международные и государственные экзамены. 
                </p>
              </div>
            </div>
            <div className="metodology-content">
              <h3 className="metodology-text-title">Посмотрите, как проходят наши занятия</h3>
              <Video />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metodology;
