import { NavLink } from "react-router-dom"
import "./css/Header.css"
import { HiMenu, HiHome, HiOutlineCode, HiOutlineDeviceTablet } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import ReactLogo from "../img/react-logo.png"
import { useState } from "react";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return <div className="header">
            <nav>
            <div className="navigation">
              <div className="nav-header">
                <div className="header-name">
                    <img src={ReactLogo} alt="" />
                    <p> Developer</p>
                    <p>Front-end </p>
                </div>
                
                <button onClick={() => setShowMenu(!showMenu) }>
                    <HiMenu className="hamburger-icon" />
                </button>
              </div>

              <a href="https://github.com/danielconka1993" target="_blank" rel="noopener noreferrer" className="header-kontakt-icony"  ><ImGithub /></a>

              <div className={`nav-list ${showMenu ? "show" : "hide"}`}>
                    <NavLink to="/"><HiHome /> Domu</NavLink>
                    <NavLink to="/projekty"><HiOutlineCode /> Projekty</NavLink>
                    <NavLink to="/kontakty"><HiOutlineDeviceTablet /> Kontakty</NavLink>
              </div>
            </div>
            </nav>
  </div>
}

export default Header