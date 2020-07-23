import React from 'react';
import Table from 'react-bootstrap/Table';
import ShopMenuItem from '../ShopMenuItem/ShopMenuItem'

function ShopMenu() {
  return (
    <Table striped>
      <tbody>
        <ShopMenuItem />
        <ShopMenuItem />
        <ShopMenuItem />
      </tbody>
    </Table>
  );
}

export default ShopMenu;
