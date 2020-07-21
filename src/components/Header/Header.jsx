import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="217px" height="81px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link className={styles.navLink}>HOME</Nav.Link>
        <Nav.Link className={styles.navLink}>MENU</Nav.Link>
        <Nav.Link className={styles.navLink}>RESTAURANT</Nav.Link>
        <Nav.Link className={styles.navLink}>CONTACT US</Nav.Link>
        <Nav.Link className={styles.orderOnlineText}>ORDER ONLINE</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
