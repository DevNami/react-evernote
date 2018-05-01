import React from 'react';
import classNames from 'classnames';

import styles from './Dimmer.scss';

const cx = classNames.bind(styles);

const Dimmer = ({ show, white, zIndex }) => {
  return (
    <div 
      className={cx('dimmer', { show }, { white })} 
    />
  );
};

export default Dimmer;