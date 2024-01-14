import { NavLink } from "react-router-dom";
import "./css/Header.css";
import { HiMenu, HiHome, HiOutlineCode } from "react-icons/hi";

import ReactLogo from "../../img/react-logo.png";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="header">
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <NavLink to="/">
              <div className="header-name">
                <img src={ReactLogo} alt="" />
                <p>Developer</p>
                <p>Full-stack</p>
              </div>
            </NavLink>

            <button onClick={() => setShowMenu(!showMenu)}>
              <HiMenu className="hamburger-icon" />
            </button>
          </div>

          <div className={`nav-list ${showMenu ? "show" : "hide"}`}>
            <NavLink onClick={hideMenu} to="/">
              <HiHome /> Domu
            </NavLink>
            <NavLink onClick={hideMenu} to="/projekty">
              <HiOutlineCode /> Projekty
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
