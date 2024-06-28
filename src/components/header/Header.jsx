import logo from "../../assets/icons/logo.svg";
import { Link, NavLink } from 'react-router-dom';
import "./_header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="navig">
            <div className="header-logo">
            <NavLink to="/"><img src={logo} alt={logo} /></NavLink>
            </div>
            <nav className="nav">
            <ul className="nav-list">
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/metodology">Методология</NavLink>
              </li>
              <li>
                <NavLink to="/teachers">Преподаватели</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
            </nav>
          </div>
          <div className="header-phone">
            <a href="tel:+74959834719">+ 7(495)983-47-19</a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;