import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = ({logged}) => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/trade">
        거래소
      </NavItem>
      {logged && <NavItem to="/wallet">
        배송확인
      </NavItem> }
      <NavItem to="/ranking">
        주문확인
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;
