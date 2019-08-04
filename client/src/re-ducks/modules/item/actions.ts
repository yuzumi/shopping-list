import types from 're-ducks/modules/item/types';
import { Dispatch } from 'redux';
import axios from 'axios';

const itemsLoading = () => ({
  type: types.ITEMS_LOADING
});

const addItem = (name: string) => (dispatch: Dispatch) => {
  axios
    .post('/api/items', { name })
    .then(response =>
      dispatch({ type: types.ADD_ITEM, payload: { item: response.data } })
    );
};

const getItems = () => (dispatch: Dispatch) => {
  dispatch(itemsLoading());

  axios
    .get('/api/items')
    .then(response =>
      dispatch({ type: types.GET_ITEMS, payload: { items: response.data } })
    );
};

const deleteItem = (id: string) => (dispatch: Dispatch) => {
  axios
    .delete(`/api/items/${id}`)
    .then(() => dispatch({ type: types.DELETE_ITEM, payload: { id } }));
};

export default {
  addItem,
  getItems,
  deleteItem,
  itemsLoading
};
