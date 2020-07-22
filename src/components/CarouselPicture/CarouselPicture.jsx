import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styles from './CarouselPicture.module.css'

function CarouselPicture(props) {
  const {image, title} = props

  return (
    <div>
      <img src={image} className={styles.carouselPicture} alt="menu1" />
      <Carousel.Caption className={styles.carouselTitle}>
        {title}
      </Carousel.Caption>
    </div>
  );
}

export default CarouselPicture;
