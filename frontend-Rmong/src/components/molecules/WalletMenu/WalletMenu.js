import React from 'react';
import styles from './WalletMenu.scss';
import classNames from 'classnames/bind';
import { Card, ResponsiveAd } from 'components';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);


const WalletMenu = () => {
  return (
    <Card className={cx('wallet-menu')} noPadding>
      <NavLink activeClassName={cx('active')} exact to="/wallet">주문내역</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/history">배송확인</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/profit">기본내용</NavLink>
      <div className={cx('ad-area')}>
        <ResponsiveAd/>
      </div>
    </Card>
  );
};

export default WalletMenu;
