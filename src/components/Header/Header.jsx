import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const linkStyle = {
    color: '#7C7C7D',
  };

  const activeLinkStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <Navbar bg="light" expand="lg" className='static-top'>
      <Navbar.Brand>
        <img src={logo} alt="logo" width="217px" height="81px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <NavLink to="/" exact style={linkStyle} activeStyle={activeLinkStyle}>
              HOME
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/menu" style={linkStyle} activeStyle={activeLinkStyle}>MENU</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/restaurant" style={linkStyle} activeStyle={activeLinkStyle}>
              RESTAURANT
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/contact-us" style={linkStyle} activeStyle={activeLinkStyle}>
              CONTACT US
            </NavLink>
          </Nav.Link>
          <Nav.Link className={styles.orderOnlineText}>ORDER ONLINE</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
