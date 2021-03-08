import React, { Component } from "react";
// thẻ thay thế thẻ a trong routing của react router dom
import {NavLink} from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <NavLink className="navbar-brand pl-5" to="/">
          CYBERSOFT
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="text-dark" activeStyle={{fontWeight:'bold'}} className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="text-dark" activeStyle={{fontWeight:'bold'}} className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="text-dark" activeStyle={{fontWeight:'bold'}} className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="text-dark" activeStyle={{fontWeight:'bold'}} className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
