import React from 'react';
import Header from '../components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuCarousel from '../components/MenuCarousel/MenuCarousel';
import MenuDownload from '../components/MenuDownload/MenuDownload';

function Menu() {
  return (
    <div>
      <Header />
      <Container fluid style={{height: '90vh', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <Row lg={12}>
          <Col>
            <MenuCarousel />
          </Col>
        </Row>
        <Row lg={12}>
          <Col>
            <MenuDownload />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;
