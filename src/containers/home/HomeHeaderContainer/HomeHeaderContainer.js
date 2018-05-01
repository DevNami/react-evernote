import React, { Component } from 'react';

import HomeHeader from 'components/home/HomeHeader';
import HomeDrawer from 'components/home/HomeDrawer';
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
        <HomeDrawer isOpened={isOpened} setDrawer={setDrawer} />
      </React.Fragment>
    )
  }
}

export default HomeHeaderContainer;

