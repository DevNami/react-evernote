import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';
import { randomKey } from 'lib/common';

const ADD_NOTEBOOK = 'new/ADD_NOTEBOOK';

export const addNotebook = createAction(ADD_NOTEBOOK); // notebook

export const actionCreators = {
  addNotebook,
};

const initialState = Record({
  list: List([
    { id: randomKey(), name: '첫 번째 노트북' },
    { id: randomKey(), name: '두 번째 노트북' },
    { id: randomKey(), name: '세 번째 노트북' },
  ]),
  index: 0
})();

export default handleActions({
  [ADD_NOTEBOOK]: (state, action) => {
    return state.update('list', list => list.push({
      ...action.payload,
      id: randomKey()
    }))
  },
}, initialState)