import React, { FunctionComponent } from 'react';
import AppNavbar from 'components/layout/AppNavbar';
import ItemCreator from 'components/ItemCreator';
import ShoppingList from 'components/list/ShoppingList';
import Section from 'components/layout/Section';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <AppNavbar />
      <Section>
        <ItemCreator />
      </Section>
      <Section>
        <ShoppingList />
      </Section>
    </div>
  );
};

export default App;
