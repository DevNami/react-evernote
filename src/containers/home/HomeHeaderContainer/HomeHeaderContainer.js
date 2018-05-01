import React, { Component } from 'react';

import HomeDrawerContainer from 'containers/home/HomeDrawerContainer';
import HomeHeader from 'components/home/HomeHeader';
import Dimmer from 'components/common/Dimmer';

class HomeHeaderContainer extends Component {
  state = {
    isOpened: false
  }

  setDrawer = (isOpened) => {
    this.setState({ isOpened });
  }

  render() {
    const { isOpened } = this.state;
    const { setDrawer } = this;

    return (
      <React.Fragment>
        <Dimmer show={isOpened} />
        <HomeHeader isOpened={isOpened} setDrawer={setDrawer} />
        <HomeDrawerContainer isOpened={isOpened} setDrawer={setDrawer} />
      </React.Fragment>
    )
  }
}

export default HomeHeaderContainer;

