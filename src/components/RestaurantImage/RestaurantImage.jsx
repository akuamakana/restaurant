import React from 'react';
import Image from 'react-bootstrap/Image';

function RestaurantImage(props) {
  const { restaurantImage } = props;
  return <Image fluid styles={{}} src={restaurantImage} />;
}

export default RestaurantImage;
