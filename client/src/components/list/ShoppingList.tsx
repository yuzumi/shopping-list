import React, { FunctionComponent } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ItemList, Item } from 'Models';
import ShoppingListItem from 'components/list/ShoppingListItem';

export interface ShoppingListProps {
  items: ItemList;
  deleteItem: (itemId: number | string) => void;
}

const ShoppingList: FunctionComponent<ShoppingListProps> = ({
  items,
  deleteItem
}) => {
  const renderItem = (item: Item) => {
    const handleDelete = () => deleteItem(item._id);

    return (
      <CSSTransition classNames="fade" key={item._id} timeout={500}>
        <ShoppingListItem item={item} deleteItem={handleDelete} />
      </CSSTransition>
    );
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(renderItem)}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
