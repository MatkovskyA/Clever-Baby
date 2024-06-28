import "./_footer.scss"
import { Link } from "react-router-dom"
import icon from "../../assets/icons/Vector6.svg"

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className="container">
        <div className="footer-wrapper">
          <p className="footer-rights">CleverBaby <img src={icon} alt="icon" /> 2020 Все права защищены</p>
          <Link to="/">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;