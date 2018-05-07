import React from 'react';

import { List, ListItem } from 'material-ui/List';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPeople from 'material-ui/svg-icons/social/people';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import ActionSettings from 'material-ui/svg-icons/action/settings';

import './DrawerMain.scss';

const innerDivStyle = {
  paddingLeft: '60px'
}

const DrawerMain = ({ history }) => {
  return (
    <section className="home-drawer-main">
      <List>
        <ListItem onClick={() => { history.push('/') }} primaryText="모든 노트" leftIcon={<NotificationEventNote />} innerDivStyle={innerDivStyle} />
        <ListItem onClick={() => { history.push('/notebook') }} primaryText="노트북" leftIcon={<DeviceDvr />} innerDivStyle={innerDivStyle} />
        <ListItem onClick={() => {}} primaryText="공유 항목" leftIcon={<SocialPeople />} innerDivStyle={innerDivStyle} />
        <ListItem onClick={() => {}} primaryText="사진 모으기" leftIcon={<ImageCollections />} innerDivStyle={innerDivStyle} />
        <ListItem onClick={() => {}} primaryText="워크챗" leftIcon={<CommunicationChat />} innerDivStyle={innerDivStyle} />
        <ListItem onClick={() => {}} primaryText="설정" leftIcon={<ActionSettings />} innerDivStyle={innerDivStyle} />
      </List>
    </section>
  )
}

export default DrawerMain;