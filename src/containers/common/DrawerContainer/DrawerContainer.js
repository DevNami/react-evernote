import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import Drawer from 'material-ui/Drawer';

import DrawerHeader from 'components/common/DrawerHeader'
import DrawerMain from 'components/common/DrawerMain'

class DrawerContainer extends Component {
  handleClickOutside = () => {
    if (this.props.isOpened === true) {
      this.props.setDrawer(false);
    }
  }

  render() {
    const { isOpened, history } = this.props;

    return (
      <Drawer open={isOpened}>
        <DrawerHeader />
        <DrawerMain history={history} />
      </Drawer>
    )
  }
}

export default enhanceWithClickOutside(DrawerContainer);