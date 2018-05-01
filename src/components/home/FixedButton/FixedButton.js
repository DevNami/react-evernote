import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import EditorAttachFile from 'material-ui/svg-icons/editor/attach-file';
import DeviceAccessAlarm from 'material-ui/svg-icons/device/access-alarm';

import './FixedButton.scss';

const iconStyles = {
  navIcon: {
    width: 36,
    height: 36,
    color: '#fff'
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

class FixedButton extends Component {
  handleClickOutside = () => this.props.handleButtonClick(false);

  render() {
    const { isActive, handleButtonClick } = this.props;
    const buttons = !isActive ? (
      <li>
        <div className="button-box" onClick={() => handleButtonClick(true)}>
          <IconButton {...IconButtonProps}>
            <ContentAdd />
          </IconButton>
        </div>
      </li>
    ) : (
      <React.Fragment>
        <li>
          <div className="label">알리미</div>
          <div className="button-box" onClick={() => handleButtonClick(false)}>
            <IconButton {...IconButtonProps}>
              <DeviceAccessAlarm />
            </IconButton>
          </div>  
        </li>
        <li>
          <div className="label">첨부파일</div>
          <div className="button-box" onClick={() => handleButtonClick(false)}>
            <IconButton {...IconButtonProps}>
              <EditorAttachFile />
            </IconButton>
          </div>  
        </li>
        <li>
          <div className="label">카메라</div>
          <div className="button-box" onClick={() => handleButtonClick(false)}>
            <IconButton {...IconButtonProps}>
              <ImageCamera />
            </IconButton>
          </div>  
        </li>
        <li>
          <div className="label">텍스트 노트</div>
          <div className="button-box" onClick={() => handleButtonClick(false, 'textnote')}>
            <IconButton {...IconButtonProps}>
              <ImageEdit />
            </IconButton>
          </div>
        </li>
      </React.Fragment>
    )

    return (
      <div className="fixed-button">
        <ul>
          { buttons }
        </ul>
      </div>
    )
  }
}

export default enhanceWithClickOutside(FixedButton);