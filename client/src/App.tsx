import React, { FunctionComponent, useState } from 'react';
import AppNavbar from 'components/layout/AppNavbar';
import ShoppingList from 'components/list/ShoppingList';
import { ItemList, Item } from 'Models';
import { v4 } from 'uuid';

// Just for example
const initialItems: ItemList = [
  {
    _id: v4(),
    name: 'Milk',
    date: new Date()
  },
  {
    _id: v4(),
    name: 'Eggs',
    date: new Date()
  }
];

const App: FunctionComponent = () => {
  const [items, setItems] = useState<ItemList>(initialItems);

  const deleteItem = (itemId: string | number): void => {
    const updatedItems: ItemList = items.filter(
      (item: Item): boolean => {
        return item._id !== itemId;
      }
    );

    setItems(updatedItems);
  };

  const addItem = (item: Item): void => {
    setItems([item, ...items]);
  };

  return (
    <div className="app">
      <AppNavbar />
      <ShoppingList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
