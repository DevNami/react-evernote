import { bindActionCreators } from 'redux';
import store from './index';

import { actionCreators as homeActions } from './modules/home';
import { actionCreators as notebookActions } from './modules/notebook';
import { actionCreators as noteActions } from './modules/note';

const { dispatch } = store;

export const HomeActions = bindActionCreators(homeActions, dispatch);
export const NotebookActions = bindActionCreators(notebookActions, dispatch);
export const NoteActions = bindActionCreators(noteActions, dispatch);