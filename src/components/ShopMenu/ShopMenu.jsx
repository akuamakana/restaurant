import React from 'react';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ShopMenuItem from '../ShopMenuItem/ShopMenuItem';
import menuItems from '../../resources/menuItems.json';

function ShopMenu() {
  const getCategories = () => {
		let categories = menuItems.map((item) => item.category);
		categories = categories.filter((category, i, uniqueCategories) => uniqueCategories.indexOf(category) === i)
		return categories
	};

  console.log(getCategories());

  return (
    <Tabs defaultActiveKey="starters">
      <Tab eventKey="starters" title="Starters">
        <Table striped>
          <tbody>
            <ShopMenuItem />
            <ShopMenuItem />
            <ShopMenuItem />
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}

export default ShopMenu;
