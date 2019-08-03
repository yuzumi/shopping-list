import React, { FunctionComponent } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { Item } from 'Models';

export interface ShoppingListItemProps {
  item: Item;
  deleteItem: () => void;
}

const ShoppingListItem: FunctionComponent<ShoppingListItemProps> = ({
  item,
  deleteItem
}) => (
  <ListGroupItem>
    <Button className="mr-2" color="danger" size="sm" onClick={deleteItem}>
      &times;
    </Button>
    {item.name}
  </ListGroupItem>
);

export default ShoppingListItem;
