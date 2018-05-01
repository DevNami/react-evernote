import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import store from 'store';

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

export default Root;