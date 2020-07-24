import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import allItems from '../../resources/menuItems.json';
import ShopMenuItem from '../ShopMenuItem/ShopMenuItem';

function ShopMenu(props) {
  const { cartItems, setCartItems } = props;
  let menuItems = allItems.map((item, id) => Object.assign(item, { id }));
  
  const capitalLetter = (str) => {
    str = str.split(' ');
    for (let i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
  };
  
  const getCategories = () => {
    let categories = menuItems.map((item) => item.category = capitalLetter(item.category));
    categories = categories.filter((category, i, uniqueCategories) => uniqueCategories.indexOf(category) === i);
    return categories;
  };
  
  const uniqueCategories = getCategories();
  
  const renderTabs = uniqueCategories.map((category) => {
    const categorizedItems = menuItems.filter((item) => item.category === category);
    return (
      <Tab eventKey={category} title={category} key={category}>
        <Table striped responsive>
          <tbody>
            {categorizedItems.map((item, i) => (
              <ShopMenuItem category={category} key={i} item={item} cartItems={cartItems} setCartItems={setCartItems} />
              ))}
          </tbody>
        </Table>
      </Tab>
    );
  });
  
  menuItems = menuItems.map(item => Object.assign(item, {name: capitalLetter(item.name)}))
  
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <Tabs defaultActiveKey={uniqueCategories[0]}>{renderTabs}</Tabs>
    </div>
  );
}

export default ShopMenu;
