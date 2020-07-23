import React from 'react';
import Button from 'react-bootstrap/Button';

function ShopMenuItem(props) {
  const { item, cartItems, setCartItems } = props;

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item]
    setCartItems(updatedCart)
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <Button variant="light" size='sm' style={{float: 'right',}} onClick={() => addToCart(item)}>
          Add To Cart
        </Button>
      </td>
    </tr>
  );
}

export default ShopMenuItem;
