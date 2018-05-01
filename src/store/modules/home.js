import { createAction, handleActions } from 'redux-actions';
import { Record } from 'immutable';

const SET_VISIBLE_BUTTON = 'home/SET_VISIBLE_BUTTON';

export const setVisibleButton = createAction(SET_VISIBLE_BUTTON); // isShow

export const actionCreators = {
  setVisibleButton
};

const initialState = Record({
  isShowButton: true,
})();

export default handleActions({
  [SET_VISIBLE_BUTTON]: (state, action) => state.set('isShowButton', action.payload)
}, initialState)