import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const ADD_NOTE = 'note/ADD_NOTE';
const MODIFY_NOTE = 'note/MODIFY_NOTE';
const GET_NOTE = 'note/GET_NOTE';
const SELECTED_NOTE = 'note/SELECTED_NOTE';

export const addNote = createAction(ADD_NOTE);
export const modifyNote = createAction(MODIFY_NOTE);
export const getNote = createAction(GET_NOTE);
export const selectedNote = createAction(SELECTED_NOTE);

export const actionCreators = {
  addNote,
  modifyNote,
  getNote,
  selectedNote
};

const Note = Record({
  id: '',
  title: '',
  content: '',
  notebook: '',
  c_date: null
});

const initialState = Record({
  list: List([
    Note({ id:'111', title: 'Title1', content: 'Content1', notebook: '첫 번째 노트북', c_date: new Date() }),
    Note({ id:'222', title: 'Title2', content: 'Content2', notebook: '세 번째 노트북', c_date: new Date() }),
    Note({ id:'333', title: 'Title3', content: 'Content3', notebook: '세 번째 노트북', c_date: new Date() }),
    Note({ id:'444', title: 'Title4', content: 'Content4', notebook: '두 번째 노트북', c_date: new Date() }),
  ]),
  selectedNote: null
})();

export default handleActions({
  [ADD_NOTE]: (state, action) => state.update('list', list => list.push(new Note(action.payload))),

  [MODIFY_NOTE]: (state, action) => {
    const { list } = state
    const { id, title, content, notebook } = action.payload

    const index = list.findIndex((d, i) => d.id === id)

    return state.setIn(['list', index, 'title'], title)
                .setIn(['list', index, 'content'], content)
                .setIn(['list', index, 'notebook'], notebook)
  },

  [SELECTED_NOTE]: (state, action) => {
    const note = state.list.find((d, i) => d.id === action.payload)
    return state.set('selectedNote', note)
  }
}, initialState)