import React, { FunctionComponent, useEffect } from 'react';
import { ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ItemList, Item } from 'Models';
import ShoppingListItem from 'components/list/ShoppingListItem';
import { connect } from 'react-redux';
import { actions, selectors } from 're-ducks/modules/item';
import Loader from 'components/shared/Loader';

export interface Data {
  items: ItemList;
  isLoading: boolean;
}

export interface ShoppingListProps {
  data: Data;
  getItems: () => void;
  deleteItem: (itemId: string) => void;
}

const ShoppingList: FunctionComponent<ShoppingListProps> = ({
  data: { items, isLoading },
  getItems,
  deleteItem
}) => {
  useEffect(() => {
    getItems();
  }, []);

  const renderItem = (item: Item) => {
    const handleDelete = () => deleteItem(item._id);

    return (
      <CSSTransition classNames="fade" key={item._id} timeout={500}>
        <ShoppingListItem item={item} deleteItem={handleDelete} />
      </CSSTransition>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ListGroup>
          <TransitionGroup>{items.map(renderItem)}</TransitionGroup>
        </ListGroup>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  data: selectors.selectItem(state)
});

export default connect(
  mapStateToProps,
  { getItems: actions.getItems, deleteItem: actions.deleteItem }
)(ShoppingList);
