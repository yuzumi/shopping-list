import types from 're-ducks/modules/item/types';

const addItem = (name: string) => ({
  type: types.ADD_ITEM,
  payload: {
    name
  }
});

const getItems = () => ({
  type: types.GET_ITEMS
});

const deleteItem = (id: string) => ({
  type: types.DELETE_ITEM,
  payload: {
    id
  }
});

export default {
  addItem,
  getItems,
  deleteItem
};
