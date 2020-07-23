import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CartItem(props) {
  const {item} = props
  return (
    <tr style={{width: '100%'}}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <Form.Control size="sm" as="select" style={{marginLeft: '10px'}}>
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
        <Button variant='danger' size="sm" style={{float: 'right', marginRight: '5px'}}>Delete</Button>
      </td>
    </tr>
  );
}

export default CartItem;
