import "./_teachers.scss"

import Carousel from "../slider/Carousel";

const Teachers = () => {

  return (
    <section className="teachers">
      <div className="container">
        <div className="teacher-header">
          <h2>Наши преподаватели</h2>
          <p>Все наши преподаватели — носители английского языка и имеют необходимое образование и опыт работы с детьми</p>
        </div>
        <div className="teacher-wrapper">
          <Carousel />
        </div>
      </div>
    </section>

  )
}

export default Teachers;