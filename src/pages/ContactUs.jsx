import React from 'react';
import Header from '../components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import ContactMap from '../components/ContactMap/ContactMap';

function ContactUs() {
  return (
    <div>
      <Header />
      <Container fluid style={{ height: '90vh', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Row>
          <Col lg={12}>
            <ContactMap/>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
