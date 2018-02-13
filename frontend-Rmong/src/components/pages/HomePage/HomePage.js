import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import {HeaderContainer, CoinMainContainer, SocketSubscriber} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/md/call';
import GithubIcon from 'react-icons/lib/md/card-giftcard';
import EmailIcon from 'react-icons/lib/md/email';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <Helmet>
        <title>Richnet.biz</title>
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
      </Helmet>
      <SocketSubscriber channel="TICKER"/>
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>
      <BgColor color="#f6f6f6"/>
      <div className={cx('block', 'responsive')}>
        <h2>Richnet.biz에선, <b>특가</b>에 구매할 수 있습니다.</h2>
        <CoinMainContainer/>
      </div>
      <div className={cx('third')}>
        <div className={cx('responsive', 'grid')}>
          <Link to="/ranking" className={cx('column')}>
            <TrophyIcon/>
            <div className={cx('description')}>
              <h3>Richnet 고객센터</h3>
              <p>보세요! <br/>그리고, 쉽게 확인해보세요!</p>
            </div>
          </Link>
          <a className={cx('column')} href="/trade" target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            <div className={cx('description')}>
              <h3>배송 안내</h3>
              <p>고객님의 안전거래를 위하여<br/>구매안전서비스에 가입되어 있습니다.</p>
            </div>
          </a>
        </div>
        <div className={cx('my-message', 'responsive')}>
          <div>
          설연휴 배송안내
          </div>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('email')}>
          <EmailIcon/> wn@richnet.biz
        </div>
        <div className={cx('copyright')}>
          Rich.net 대표이사: 우종민<br />
          사업자등록번호: 000-00-000<br />
          통신판매신고번호: 제 2018-0000-0000호
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomePage;
