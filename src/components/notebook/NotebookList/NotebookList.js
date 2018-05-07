import React from 'react';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const rightButton = (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="공유" />
    <MenuItem primaryText="이름 바꾸기" />
    <MenuItem primaryText="삭제" />
  </IconMenu>
)

const NotebookList = ({ list }) => {
  return (
    <div className="notebook-list">
      <List>
        <Subheader>노트북</Subheader>
        { list.map((d, i) => 
            <ListItem
              rightIcon={rightButton}
              primaryText={d.name}
              secondaryText="2개의 노트"
              key={i}
            /> 
        ) }
      </List>
    </div>
  );
}; 

export default NotebookList;