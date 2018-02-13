import React from 'react';
import styles from './RankingPage.scss';
import classNames from 'classnames/bind';
import { PageTemplate, Card, PolyBackground, ResponsiveAd } from 'components';
import { HeaderContainer, RankingContainer } from 'containers';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const RankingPage = ({match}) => {
  const { type } = match.params;

  return (
    <PageTemplate header={<HeaderContainer solid/>} padding>
      <Helmet>
        <title>확인 :: Rich.net</title>
        <meta name="description" content="사용자들의 모의 거래 수익률 랭킹"/>
      </Helmet>
      <div className={cx('block')}>
      </div>
      <Card className={cx('ranking-box')}>
        <div className={cx('ads-area')}>
          <ResponsiveAd/>
        </div>
        <h1>주문 내역</h1>
        <div className={cx('description')}>
          주문 내역을 확인하실 수 있습니다.
          <br/>주문내역은 1시간마다 갱신됩니다..
        </div>
        <hr/>
        <div className={cx('type-selector')}>
          <Link to="/ranking/monthly" className={cx('type', {
            active: !type || type === 'monthly'
          })}>
            월 수익률
          </Link>
          <Link to="/ranking/total" className={cx('type', {
            active: type === 'total'
          })}>
            전체 수익률
          </Link>
        </div>
        <RankingContainer type={type}/>
      </Card>
    </PageTemplate>
  );
}

export default RankingPage;
