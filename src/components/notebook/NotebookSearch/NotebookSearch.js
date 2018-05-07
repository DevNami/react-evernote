import React from 'react';
import TextField from 'material-ui/TextField';

const NotebookSearch = ({ handleChange }) => {
  return (
    <div>
      <TextField
        name="search"
        hintText="enter notebook name"
        floatingLabelText="enter notebook name"
        fullWidth={true}
        onChange={handleChange}
      />
    </div>
  )
}

export default NotebookSearch;