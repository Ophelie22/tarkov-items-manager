import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const ItemsFilter = () => (
  <Dropdown text='All'>
    <Dropdown.Menu>
      <Dropdown.Item id="type" text='Type' />
      <Dropdown.Item id="dealer" text='Dealer' />
      <Dropdown.Item id="quest" text='Quest' />
      <Dropdown.Item id="price" ext='Price' />
    </Dropdown.Menu>
  </Dropdown>
);

export default ItemsFilter;
