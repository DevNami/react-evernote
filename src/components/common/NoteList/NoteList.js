import React from 'react';
import { List } from 'material-ui/List';

import NoteItem from 'components/common/NoteItem';

const NoteList = ({ list, handleClick }) => (
  <List className="note-list">
    { 
      list.map((d, i) => 
        <NoteItem 
          note={d} 
          key={i} 
          handleClick={handleClick}
        />
      ) 
    }
  </List>
)

export default NoteList;