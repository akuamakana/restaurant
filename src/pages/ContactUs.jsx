import React from 'react';
import Header from '../components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from '../components/ContactInfo/ContactInfo';

function ContactUs() {
  return (
    <div>
      <Header />
      <Container fluid style={{ height: '90vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Row>
        <Col>
          <ContactInfo />
        </Col>
        <Col>
          <ContactInfo />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
