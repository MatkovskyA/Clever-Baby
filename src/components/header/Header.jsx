import logo from "../../assets/icons/logo.svg";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="nav">
            <div className="header-logo">
              <img src={logo} alt={logo} />
            </div>
            <nav>
            <ul>
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
            <a href=""></a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;