import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import menuItems from '../../resources/menuItems.json';
import ShopMenuItem from '../ShopMenuItem/ShopMenuItem';

function ShopMenu() {
  const getCategories = () => {
    let categories = menuItems.map((item) => item.category);
    categories = categories.filter((category, i, uniqueCategories) => uniqueCategories.indexOf(category) === i);
    return categories;
  };

  const uniqueCategories = getCategories();

  const categoryTabs = uniqueCategories.map((category) => {
    const categorizedItems = menuItems.filter((item) => item.category === category);
    return (
      <Tab eventKey={category} title={category} key={category}>
        <Table striped>
          <tbody>
            {categorizedItems.map((item, i) => (
              <ShopMenuItem category={category} key={i} item={item} />
            ))}
          </tbody>
        </Table>
      </Tab>
    );
  });
  console.log(categoryTabs);

  return (
    <Tabs defaultActiveKey={uniqueCategories[0]}>
      {categoryTabs}
    </Tabs>
  );
}

export default ShopMenu;
