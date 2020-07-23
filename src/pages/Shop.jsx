import React, {useState} from 'react'
import Header from '../components/Header/Header'
import ShopMenu from '../components/ShopMenu/ShopMenu'
import Cart from '../components/Cart/Cart';

function OrderOnline() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <Header/>
      <ShopMenu cartItems={cartItems} setCartItems={setCartItems}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default OrderOnline
