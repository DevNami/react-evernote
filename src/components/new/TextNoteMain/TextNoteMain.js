import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ImageAddNote from 'material-ui/svg-icons/image/add-to-photos';
import DeviceAccessAlarm from 'material-ui/svg-icons/device/access-alarm';
import ActionInfo from 'material-ui/svg-icons/action/info';

import './TextNoteMain.scss';

const iconStyles = {
  navIcon: {
    width: 30,
    height: 30
  },
  navStyle: {
    width: 40,
    height: 48,
    padding: 0 
  }
};

const IconButtonProps = {
  touch: true,
  iconStyle: iconStyles.navIcon,
  style: iconStyles.navStyle
}

const TextNoteMain = ({ title, content, list, selectedNotebook, handleSelectboxChange, handleInputChange, handleOpen }) => {
  const notebookSelectbox = list.map((d, i) => <MenuItem value={d.name} key={i} primaryText={d.name} />)

  return (
    <main className="text-note-main">
      <div>
        <TextField 
          id="title" 
          floatingLabelText="노트 제목" 
          fullWidth={true} 
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className="middle-nav">
        <SelectField
          onChange={handleSelectboxChange}
          maxHeight={200}
          value={selectedNotebook}
          style={{ maxWidth: '60%' }}
        >
          { notebookSelectbox }
        </SelectField>
        <div className="button-pnl">
          <IconButton {...IconButtonProps} onClick={handleOpen}>
            <ImageAddNote />
          </IconButton>
          <IconButton {...IconButtonProps}>
            <DeviceAccessAlarm />
          </IconButton>
          <IconButton {...IconButtonProps}>
            <ActionInfo />
          </IconButton>
        </div>
      </div>
      <TextField
        id="content" 
        hintText="무슨 생각을 하고 계신가요?"
        floatingLabelText="무슨 생각을 하고 계신가요?"
        fullWidth={true} 
        multiLine={true}
        value={content}
        onChange={handleInputChange}
      />
    </main>
  )
}

export default TextNoteMain;