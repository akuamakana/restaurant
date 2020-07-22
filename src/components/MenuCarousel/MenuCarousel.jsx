import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import menuImage1 from '../../images/menuImage1.jpg';
import menuImage2 from '../../images/menuImage2.jpg';
import menuImage3 from '../../images/menuImage3.jpg';
import menuImage4 from '../../images/menuImage4.jpg';

function MenuCarousel() {
  return (
    <Carousel style={{ width: '1000px', height: 'auto' }} data-ride="carousel">
      <Carousel.Item>
        <img src={menuImage1} style={{ width: '1000px', height: '650px' }} alt="menu1" />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <h1>Beef Satay</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={menuImage2} style={{ width: '1000px', height: '650px' }} alt="menu1" />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <h1>Pad Thai</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={menuImage3} style={{ width: '1000px', height: '650px' }} alt="menu1" />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <h1>Beef Pad See Ew</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={menuImage4} style={{ width: '1000px', height: '650px' }} alt="menu1" />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <h1>Chicken Fried Rice</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MenuCarousel;
