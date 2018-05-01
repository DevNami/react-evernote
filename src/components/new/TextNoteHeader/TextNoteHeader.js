import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import ContentTextFormat from 'material-ui/svg-icons/content/text-format';
import EditorAttachFile from 'material-ui/svg-icons/editor/attach-file';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Header from 'components/common/Header';

import { green500 } from 'material-ui/styles/colors';
import './TextNoteHeader.scss';

const iconStyles = {
  navIcon: {
    width: 30,
    height: 30
  },
  navStyle: {
    width: 44,
    height: 48,
    padding: 0 
  }
};

const IconButtonProps = {
  touch: true,
  iconStyle: iconStyles.navIcon,
  style: iconStyles.navStyle
}

const TextNoteHeader = ({ addNote }) => {
  return (
    <Header className="text-note-header">
      <IconButton {...IconButtonProps} onClick={addNote}>
        <ActionDone color={green500} />
      </IconButton>
      <div className="button-pnl">
        <IconButton {...IconButtonProps}>
          <ContentUndo />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <ContentRedo />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <ContentTextFormat />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <EditorAttachFile />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <ImageCamera />
        </IconButton>
        <IconButton {...IconButtonProps}>
          <NavigationMoreVert />
        </IconButton>
      </div>
    </Header>
  )
}

export default TextNoteHeader;