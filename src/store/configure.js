import { createStore } from 'redux';
import reducers from 'store/modules';

const configure = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configure;