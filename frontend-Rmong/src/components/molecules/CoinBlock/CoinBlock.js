import React from 'react';
import styles from './CoinBlock.scss';
import classNames from 'classnames/bind';
import { CoinIcon, Card } from 'components';
import { limitDigit, decimalToPercentString } from 'lib/utils';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CoinBlock = ({currencyKey, name , last, percent}) => (
  <Link to={`/trade/${currencyKey}`} className={cx('coin-block-wrapper')}>
    <Card className={cx('coin-block')}>
      <div className={cx('icon-wrapper')}>
        <CoinIcon type={currencyKey}/>
      </div>
      <div className={cx('coin-name')}>
        {name}
      </div>
      <div className={cx('price-info')}>
        <div className={cx('description')}>
          {name}
          <span className={cx({ negative: percent < 0 })}>({decimalToPercentString(percent)}%)</span>
        </div>
        <div className={cx('sale')}>50,000원</div>
        <div className={cx('value')}>44,500원</div>
      </div>
    </Card>
  </Link>
);

export default CoinBlock;
