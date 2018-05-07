import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Home, Notebook, New } from 'pages';

import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/notebook" component={Notebook} />
            <Route path="/new" component={New} />
          </div>
        </Fragment>
      </MuiThemeProvider>
    )
  }
};

export default App;