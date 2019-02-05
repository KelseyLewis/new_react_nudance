import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import styles from "../../src/App.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import About from "./AboutComponent";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      dropdownOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      //Code from old project that still needs to be converted
      // <li class = "nav-item dropdown"><a class = "nav-link dropdown-toggle" href = "#" data-toggle="dropdown">Studio</a>
      //     <div class="dropdown-menu">
      //         <a href=".\NuDance_AboutUs.html" class="dropdown-item">About Us</a>
      //         <a href="#" class="dropdown-item">Instructors</a>
      //     </div>
      // </li>

      // React Fragments don't add node to the DOM like a div would
      <React.Fragment>
        <Jumbotron id="header" className="jumbotron mb-0">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 display-4 text-center text-dark">
                <h1>NuDance Studio</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar
          dark
          expand="md"
          className="navbar navbar-custom navbar-expand-sm sticky-top navbar-dark bg-dark"
        >
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/dance_icon.png"
                height="30"
                width="41"
                alt="Dance Icon"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <Dropdown
                  nav
                  inNavbar
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle nav caret>
                    <span className="fa fa-info fa-lg mr-2" />
                    <div className="d-inline">Studio</div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      {/* Idk why this didn't work with link, but it worked with an anchor tag.. */}
                      <a href="/about">About Us</a>
                    </DropdownItem>
                    <DropdownItem
                      className="nav-link text-dark"
                      to="/instructors"
                    >
                      Instructors
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink className="nav-link" to="/classes">
                    <span className="fa fa-list fa-lg" /> Classes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/schedule">
                    <span className="fa fa-calendar fa-lg" /> Schedule
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg" /> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
