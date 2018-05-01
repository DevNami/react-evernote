import React from 'react';
import { List } from 'material-ui/List';

import Note from 'components/common/Note';

const NoteList = ({ list, handleClick }) => (
  <List className="note-list">
    { 
      list.map((d, i) => 
        <Note 
          note={d} 
          key={i} 
          handleClick={handleClick}
        />
      ) 
    }
  </List>
)

export default NoteList;