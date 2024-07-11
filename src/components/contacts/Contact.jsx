import "./_contact.scss"

import iconInstagram from "../../assets/icons/instagram.svg"
import iconFacebook from "../../assets/icons/facebook.svg"
import iconVk from "../../assets/icons/vk.svg"

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact-title">Мы ждем вас</h2>
        <div className="contact-wrapper">
          <div className="contact-block">
            <h4>Приходите к нам</h4>
            <span>Санкт-Петербург, <br/>
            ул. Большая Конюшенная, 19</span>
          </div>
          <div className="contact-block">
            <h4>Позвоните нам</h4>
            <a href="tel:+74959834719">+ 7(495)983-47-19</a>
          </div>
          <div className="contact-block">
            <h4>Режим работы</h4>
            <span>Пн-Сб, с 9-00 до 20-00</span>
          </div>
          <div className="contact-block">
            <h4>Напишите нам</h4>
            <a href="mailto:info@cleverbaby.ru" target="_blank">info@cleverbaby.ru</a>
          </div>
          <div className="contact-block">
            <h4>Мы в соцсетях</h4>
            <a href="https://facebook.com/cleverbaby" className="contact-block__link"  target="_blank"><img src={iconFacebook} alt="Facebook" /></a>
            <a href="https://https://vk.com/public211468852" className="contact-block__link"  target="_blank"><img src={iconVk} alt="VK" /></a>
            <a href="https://instagram.com/cleverbaby"  className="contact-block__link" target="_blank"><img src={iconInstagram} alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;