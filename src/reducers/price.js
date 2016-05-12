import { EXPAND_ITEM, CHANGE_FILTER } from '../constants/Price'
import testPrice from '../../testPrice.json'

const initialState = {
    keyword: null,
    expandItemKey: null,
    items: testPrice
};

export default function price(state = initialState, action) {
  switch (action.type) {
    case EXPAND_ITEM:
        return { ...state, expandItemKey: action.payload};
    case CHANGE_FILTER:
      return { ...state, keyword: action.payload};
    default:
      return state;
  }
}