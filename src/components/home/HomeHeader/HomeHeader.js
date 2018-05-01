import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Header from 'components/common/Header';

import './HomeHeader.scss';

const iconStyles = {
  navIcon: {
    width: 30,
    height: 30
  },
  navStyle: {
    width: 48,
    height: 48,
    padding: 0 
  }
};

const IconButtonProps = {
  touch: true,
  iconStyle: iconStyles.navIcon,
  style: iconStyles.navStyle
}

const HomeHeader = ({ setDrawer }) => {
  return (
    <Header className="home-header">
      <IconButton {...IconButtonProps} onClick={() => setDrawer(true)}>
        <NavigationMenu />
      </IconButton>
      <div className="title-pnl">
        <span>
          모든 노트
        </span>
      </div>
      <div className="button-pnl">
        <IconButton {...IconButtonProps}>
          <CommunicationChat />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <ActionSearch />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <NavigationMoreVert />
        </IconButton>
      </div>
    </Header>
  )
}

export default HomeHeader;