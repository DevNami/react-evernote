import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const ADD_NOTEBOOK = 'new/ADD_NOTEBOOK';

export const addNotebook = createAction(ADD_NOTEBOOK); // notebook

export const actionCreators = {
  addNotebook,
};

const initialState = Record({
  list: List([
    { name: '첫 번째 노트북' },
    { name: '두 번째 노트북' },
    { name: '세 번째 노트북' },
  ]),
  index: 0
})();

export default handleActions({
  [ADD_NOTEBOOK]: (state, action) => state.update('list', list => list.push(action.payload)),
}, initialState)