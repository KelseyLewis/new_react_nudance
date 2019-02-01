import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav=this.toggleNav.bind(this);
    }
        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }
    render() {
        return(

            //Code from old project that still needs to be converted
            // <li class = "nav-item dropdown"><a class = "nav-link dropdown-toggle" href = "#" data-toggle="dropdown">Studio</a>
            //     <div class="dropdown-menu">
            //         <a href=".\NuDance_AboutUs.html" class="dropdown-item">About Us</a>
            //         <a href="#" class="dropdown-item">Instructors</a>
            //     </div>
            // </li>

            // React Fragments don't add node to the DOM like a div would
            <React.Fragment>
                <Jumbotron className="jumbotron" id="header">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 display-4 text-center text-dark">
                                <h1>NuDance Studio</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark expand="md" className="navbar navbar-custom navbar-expand-sm sticky-top navbar-dark bg-dark">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className = "mr-auto" href="/">
                            <img src="assets/images/dance_icon.png" height="30" width ="41"
                                alt = "Dance Icon" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/classes">
                                        <span className="fa fa-list fa-lg"></span> Classes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/schedule">
                                        <span className="fa fa-calendar fa-lg"></span> Schedule
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
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