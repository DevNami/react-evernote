import { combineReducers } from 'redux';

import home from './home';
import notebook from './notebook';
import note from './note';

export default combineReducers({
  home,
  notebook,
  note
})