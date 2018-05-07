import React from 'react';

import HomeTemplate from 'components/home/HomeTemplate';
import HomeHeaderContainer from 'containers/home/HomeHeaderContainer';
import NoteListContainer from 'containers/home/NoteListContainer';
import FixedButtonContainer from 'containers/common/FixedButtonContainer';

const Home = ({ history }) => {
  return (
    <HomeTemplate header={<HomeHeaderContainer history={history} />}>
      <NoteListContainer history={history} />
      <FixedButtonContainer history={history} />
    </HomeTemplate>
  )
}

export default Home;