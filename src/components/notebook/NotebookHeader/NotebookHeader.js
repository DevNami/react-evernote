import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ImageAddNote from 'material-ui/svg-icons/image/add-to-photos';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Header from 'components/common/Header';

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

const NotebookHeader = ({ setDrawer, handleOpen }) => {
  return (
    <Header className="home-header">
      <IconButton {...IconButtonProps} onClick={() => setDrawer(true)}>
        <NavigationMenu />
      </IconButton>
      <div className="title-pnl">
        <span>
          노트북
        </span>
      </div>
      <div className="button-pnl">
        <IconButton {...IconButtonProps} onClick={handleOpen}>
          <ImageAddNote />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <NavigationMoreVert />
        </IconButton>
      </div>
    </Header>
  )
}

export default NotebookHeader;