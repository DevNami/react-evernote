import React from 'react';
import IconButton from 'material-ui/IconButton';
import ImageBlurOn from 'material-ui/svg-icons/image/blur-on';

import './DrawerHeader.scss';

const iconStyles = {
  navIcon: {
    width: 96,
    height: 96,
    // color: '#fff'
  },
  navStyle: {
    width: 96,
    height: 96,
    padding: 0
  }
};

const IconButtonProps = {
  touch: true,
  iconStyle: iconStyles.navIcon,
  style: iconStyles.navStyle
}

const DrawerHeader = () => {
  return (
    <header className="home-drawer-header">
      <IconButton {...IconButtonProps}>
        <ImageBlurOn />
      </IconButton>
      <p className="nickname">nyg4629</p>
      <p className="email">nyg4629@gmail.com</p>
    </header>
  )
}

export default DrawerHeader;