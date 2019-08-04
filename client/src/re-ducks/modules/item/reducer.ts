import { v4 } from 'uuid';
import types from 're-ducks/modules/item/types';

// Just for test
const initialState = {
  items: [],
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          { _id: v4(), name: payload.name, date: new Date() }
        ]
      };
    case types.GET_ITEMS:
      return { ...state };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload.id)
      };
    case types.ITEMS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
