import React from 'react';

import { List, ListItem } from 'material-ui/List';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import SocialPeople from 'material-ui/svg-icons/social/people';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const HomeDrawerMain = () => {
  return (
    <section className="home-drawer-main">
      <List>
        <ListItem primaryText="모든 노트" leftIcon={<NotificationEventNote />} />
        <ListItem primaryText="노트북" leftIcon={<DeviceDvr />} />
        <ListItem primaryText="공유 항목" leftIcon={<SocialPeople />} />
        <ListItem primaryText="사진 모으기" leftIcon={<ImageCollections />} />
        <ListItem primaryText="워크챗" leftIcon={<CommunicationChat />} />
        <ListItem primaryText="설정" leftIcon={<ActionSettings />} />
      </List>
    </section>
  )
}

export default HomeDrawerMain;