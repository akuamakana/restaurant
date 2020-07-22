import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.css';

function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <Row className={styles.row}>
        <Col className={styles.col}>© Copyright 2016, Pinkaow.com. All Rights Reserved.</Col>
        <Col className={styles.col}>pinkaowthailasvegas@gmail.com +1 (702) 638-2746</Col>
      </Row>
    </Container>
  );
}

export default Footer;
