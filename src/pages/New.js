import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewTemplate from 'components/new/NewTemplate';
import TextNote from 'components/new/TextNote';

const New = ({ match, location }) => {
  return (
    <NewTemplate>
      <Switch>
        <Route path={`${match.url}/textnote/:id`} component={TextNote} />
        <Route path={`${match.url}/textnote`} component={TextNote} />
      </Switch>
    </NewTemplate>
  )
}

export default New;