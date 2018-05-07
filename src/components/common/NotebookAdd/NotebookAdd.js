import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const NotebookAdd = ({ handleClose, handleChange, addNotebook, open }) => {
  const actions = [
    <FlatButton
      label="취소"
      primary={true}
      keyboardFocused={true}
      onClick={handleClose}
    />,
    <FlatButton
      label="확인"
      primary={true}
      keyboardFocused={true}
      onClick={addNotebook}
    />,
  ];

  return (
    <Dialog
      title="새 노트북"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={this.handleClose}
    >
      <TextField 
        id="newName"
        fullWidth={true} 
        onChange={handleChange}
      />
    </Dialog>
  )
}

export default NotebookAdd;