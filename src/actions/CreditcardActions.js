import { FLIP_CARD, NAME_CHANGE } from '../constants/ActionTypes';

export function flipCard(currentSide) {
  if(currentSide === 'front') {
    return {
      type: FLIP_CARD,
      currentSide: 'back'
    };
  } else {
    return {
      type: FLIP_CARD,
      currentSide: 'front'
    };
  }
}

export function nameChange(newName) {
  return {
    type: NAME_CHANGE,
    cardHolder: newName
  };
}
