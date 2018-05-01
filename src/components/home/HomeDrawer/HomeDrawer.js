import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import Drawer from 'material-ui/Drawer';

class HomeDrawer extends Component {
  handleClickOutside = () => {
    if (this.props.isOpened === true) {
      this.props.setDrawer(false);
    }
  }

  render() {
    const { isOpened } = this.props;

    return (
      <Drawer open={isOpened}>
        
      </Drawer>
    )
  }
}

export default enhanceWithClickOutside(HomeDrawer);