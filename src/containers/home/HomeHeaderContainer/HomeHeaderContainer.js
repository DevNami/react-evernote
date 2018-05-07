import React, { Component, Fragment } from 'react';

import DrawerContainer from 'containers/common/DrawerContainer';
import HomeHeader from 'components/home/HomeHeader';
import Dimmer from 'components/common/Dimmer';

class HomeHeaderContainer extends Component {
  state = {
    isOpened: false
  }

  setDrawer = (isOpened) => {
    this.setState({ isOpened })
  }

  render() {
    const { isOpened } = this.state
    const { setDrawer } = this
    const { history } = this.props

    return (
      <Fragment>
        <Dimmer show={isOpened} />
        <HomeHeader 
          isOpened={isOpened} 
          setDrawer={setDrawer} 
        />
        <DrawerContainer 
          isOpened={isOpened} 
          setDrawer={setDrawer} 
          history={history} 
        />
      </Fragment>
    )
  }
}

export default HomeHeaderContainer;

