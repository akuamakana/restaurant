import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from './HomeScreen.module.css';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <Container fluid className={styles.backgroundContainer}>
      <Link to="/shop">
        <Button variant="dark" className={styles.orderButton}>
          ORDER ONLINE
        </Button>
      </Link>
    </Container>
  );
}

export default HomeScreen;
