import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { GrCart } from 'react-icons/gr';
import { IconContext } from 'react-icons';

import CartItem from '../CartItem/CartItem';

function Cart(props) {
  const { cartItems, setCartItems } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderCartItems = cartItems.map((item, i) => {
    return <CartItem item={item} key={i} />;
  });

  return (
    <>
      <IconContext.Provider value={{ size: '2em' }}>
        <Button style={{ position: 'fixed', right: '0', borderRadius: '0' }} variant="light" onClick={handleShow}>
          <GrCart />
        </Button>
      </IconContext.Provider>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>{`Cart (${cartItems.length})`}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0' }}>
          <Table style={{ marginBottom: '0' }} striped>
            <tbody>{renderCartItems}</tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
