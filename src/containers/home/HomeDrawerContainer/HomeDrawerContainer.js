import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import Drawer from 'material-ui/Drawer';

import HomeDrawerHeader from 'components/home/HomeDrawerHeader'
import HomeDrawerMain from 'components/home/HomeDrawerMain'

class HomeDrawerContainer extends Component {
  handleClickOutside = () => {
    if (this.props.isOpened === true) {
      this.props.setDrawer(false);
    }
  }

  render() {
    const { isOpened } = this.props;

    return (
      <Drawer open={isOpened}>
        <HomeDrawerHeader />
        <HomeDrawerMain />
      </Drawer>
    )
  }
}

export default enhanceWithClickOutside(HomeDrawerContainer);