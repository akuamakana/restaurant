import React from 'react';
import Header from '../components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantImage from '../components/RestaurantImage/RestaurantImage';
import restaurantImage from '../images/restaurantImage.jpg';

function Restaurant() {
  return (
    <div>
      <Header />
      <Container fluid style={{ height: '90vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Row style={{alignItems: 'center', alignSelf: 'center', marginBottom: '100px'}}>
          <Col sm={12} lg={6} style={{ textAlign: 'center', padding: '0 85px' }}>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid distinctio libero consectetur culpa odio debitis ab modi, rerum obcaecati sapiente delectus! Exercitationem non ipsum odio
              voluptates iste porro voluptas illo, praesentium quae molestias, dolorum, natus voluptatibus autem laudantium ullam unde eligendi. Labore ipsa sint ipsum a quos. Eum cumque quibusdam dicta
              recusandae, est sequi maiores sit, explicabo aliquam atque dolorem.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <RestaurantImage restaurantImage={restaurantImage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Restaurant;
