import "./_header.scss"
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import logo from "../../assets/icons/logo.svg";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-navigation">
          <div className="mobileBtn" onClick={handleMenuClick}>
            <span></span>
          </div>
          <div className="header-logo">
            <NavLink to="/"><img src={logo} alt={logo} /></NavLink>
          </div>
          <nav className="header-nav">
            <ul className={`header-nav-list ${navOpen && "active"}`}>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/teachers">Преподаватели и группы</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
            <div className="header-phone">
              <a href="tel:+74959834719">+ 7(495)983-47-19</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;