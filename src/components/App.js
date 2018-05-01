import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Home, New } from 'pages';

import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={New} />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
};

export default App;