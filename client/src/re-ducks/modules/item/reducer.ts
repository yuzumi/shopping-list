import types from 're-ducks/modules/item/types';
import { ItemList } from 'Models';

export type StateType = {
  items: ItemList;
  isLoading: boolean;
};

export type ActionType = {
  type: string;
  payload: any;
};

const initialState = {
  items: [],
  isLoading: false
};

export default function reducer(
  state: StateType = initialState,
  { type, payload }: ActionType
): StateType {
  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: [{ ...payload.item }, ...state.items]
      };
    case types.GET_ITEMS:
      return { ...state, items: payload.items, isLoading: false };
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
