import {
  faCalendarAlt,
  faHome,
  faSignOutAlt,
  faTasks,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export interface NavBarProps {}

export interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  _logOut() {
    localStorage.setItem("token", "");
    window.location.replace("/login");
  }
  render() {
    return (
      <nav className="nav-bar">
        <h1 className="logoIcon">📅</h1>
        <p className="logoName">Agenda Online</p>
        <ul>
          <li>
            <Link to="/admin" id="link-select">
              <FontAwesomeIcon icon={faHome} /> HOME
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <FontAwesomeIcon icon={faCalendarAlt} /> AGENDA
            </Link>
          </li>
          <li>
            <Link to="/admin/perfil">
              <FontAwesomeIcon icon={faUserCog} /> PERFIL
            </Link>
          </li>
          <li>
            <Link to="/admin/servicos">
              <FontAwesomeIcon icon={faTasks} /> SERVIÇOS
            </Link>
          </li>
          <li onClick={this._logOut.bind(this)}>
            <a href="/login">
              <FontAwesomeIcon icon={faSignOutAlt} /> SAIR
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
