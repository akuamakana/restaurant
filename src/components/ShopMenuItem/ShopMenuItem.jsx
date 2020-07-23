import React from 'react';
import Button from 'react-bootstrap/Button';

function ShopMenuItem(props) {
  const { item } = props;

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <Button>Add</Button>
      </td>
    </tr>
  );
}

export default ShopMenuItem;
