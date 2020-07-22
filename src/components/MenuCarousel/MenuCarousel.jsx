import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselPicture from '../CarouselPicture/CarouselPicture';
import styles from './MenuCarousel.module.css'
import menuImage1 from '../../images/menuImage1.jpg';
import menuImage2 from '../../images/menuImage2.jpg';
import menuImage3 from '../../images/menuImage3.jpg';
import menuImage4 from '../../images/menuImage4.jpg';

function MenuCarousel() {
  return (
    <Carousel className={styles.carousel} data-ride="carousel">
      <Carousel.Item>
        <CarouselPicture image={menuImage1} title={'Beef Satay'} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPicture image={menuImage2} title={'Chicken Fried Rice'} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPicture image={menuImage3} title={'Pad Thai'} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPicture image={menuImage4} title={'Beef Pad See Ew'} />
      </Carousel.Item>
    </Carousel>
  );
}

export default MenuCarousel;
