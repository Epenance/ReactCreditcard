import { FLIP_CARD, NAME_CHANGE } from '../constants/ActionTypes';

export default function creditcard(state = {
  currentSide: 'front',
  cardHolder: ''
}, action) {
  switch (action.type) {
    case FLIP_CARD:
      return Object.assign({}, state, {
        currentSide: action.currentSide
      });
    case NAME_CHANGE:
      return Object.assign({}, state, {
        cardHolder: action.cardHolder
      });
    default:
      return state;
  }
}
