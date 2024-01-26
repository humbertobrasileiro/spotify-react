import React from "react";
import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="fa fa-home"></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <Library></Library>
      
    </div>
  );
};

export default Sidebar;
