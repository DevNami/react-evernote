import React from 'react';
import classNames from 'classnames';

import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = ({ children, className }) => {
  return (
    <div className={cx("header")}>
      <nav className={cx(className)}>
        { children }
      </nav>
    </div>
  )
}

export default Header;