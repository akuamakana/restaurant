import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CartItem(props) {
  const {item, cartItems, setCartItems } = props

  const deleteItem = (id) => {
    let updatedCart = [...cartItems]
    updatedCart = updatedCart.filter(item => item.id !== id)
    setCartItems(updatedCart)
  }

  const setQuantity = (value) => {
    const updatedItems = [...cartItems]
    const indexOfItem = updatedItems.indexOf(item)
    updatedItems[indexOfItem].quantity = value
    setCartItems(updatedItems)
  }

  return (
    <tr style={{width: '100%'}}>
      <td>{item.name}</td>
      <td>{item.price.toFixed(2)}</td>
      <td>
        <Form.Control value={item.quantity} size="sm" as="select" id='select' style={{marginLeft: '10px'}} onChange={(e) => setQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Form.Control>
      </td>
      <td>
        <Button variant='danger' size="sm" style={{float: 'right', marginRight: '5px'}} onClick={() => deleteItem(item.id)}>Delete</Button>
      </td>
    </tr>
  );
}

export default CartItem;
