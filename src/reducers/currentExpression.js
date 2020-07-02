import { ADD_OPERATION, ADD_NUMBER, RESTORE_EXPRESSION, CLEAR_ALL } from '../actions/currentExpression';
import { ADD_HISTORY_ITEM } from '../actions/history';
import { act } from 'react-dom/test-utils';

const DEFAULT_STATE = '';

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_OPERATION:
      return state + action.payload;

    case CLEAR_ALL:
      state = undefined;
      return '';
         

    case ADD_NUMBER:
      return state + action.payload;

    case ADD_HISTORY_ITEM: 
      return '';

    case RESTORE_EXPRESSION:
      return action.payload;

    default:
      return state;
  }
}