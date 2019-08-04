import React, { FunctionComponent } from 'react';
import ItemCreator from 'components/ItemCreator';
import ShoppingList from 'components/list/ShoppingList';
import Section from 'components/layout/Section';
import Template from 'components/layout/Template';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Template>
        <Section>
          <ItemCreator />
        </Section>
        <Section>
          <ShoppingList />
        </Section>
      </Template>
    </div>
  );
};

export default App;
