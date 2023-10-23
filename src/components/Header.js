import { NavLink } from "react-router-dom"
import "./css/Header.css"
import { HiMenu, HiHome, HiOutlineCode} from "react-icons/hi";

import ReactLogo from "../img/react-logo.png"
import { useState } from "react";
import HeaderIcons from "./HeaderIcons";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
 
  const skrytimenu = () => {
    setShowMenu(false)
  }

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

              <HeaderIcons />
              

              <div className={`nav-list ${showMenu ? "show" : "hide"}`}>
                    <NavLink onClick={skrytimenu} to="/"><HiHome /> Domu</NavLink>
                    <NavLink onClick={skrytimenu} to="/projekty"><HiOutlineCode /> Projekty</NavLink>
              </div>
            </div>
            </nav>
  </div>
}

export default Header