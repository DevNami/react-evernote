import React from 'react';
import dateFormat from 'dateformat';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { yellow600 } from 'material-ui/styles/colors';

const TextNote = <Avatar icon={<ActionAssignment />} backgroundColor={yellow600} />

const NoteItem = ({ note: { id, title, c_date }, handleClick }) => (
  <ListItem
    leftAvatar={TextNote}
    primaryText={title}
    secondaryText={dateFormat(c_date)}
    onClick={() => handleClick(id)}
  />
)
  


export default NoteItem;