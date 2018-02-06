import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import {HeaderContainer, CoinMainContainer, SocketSubscriber} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/fa/trophy';
import GithubIcon from 'react-icons/lib/go/mark-github';
import EmailIcon from 'react-icons/lib/md/email';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <Helmet>
        <title>Rich.net - RN Center</title>
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
      </Helmet>
      <SocketSubscriber channel="TICKER"/>
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>
      <BgColor color="#f6f6f6"/>
      <div className={cx('block', 'responsive')}>
        <h2>RN Center에선, <b>특가</b>에 구매할 수 있습니다.</h2>
        <CoinMainContainer/>
        <div className={cx('more')}>
          <Link className={cx('more-button')} to="/trade">
            거래소에서 더 보기
          </Link>
        </div>
      </div>
      <div className={cx('third')}>
        <div className={cx('responsive', 'grid')}>
          <Link to="/ranking" className={cx('column')}>
            <TrophyIcon/>
            <div className={cx('description')}>
              <h3>모니터링 시스템</h3>
              <p>보세요! <br/>그리고, 쉽게 확인해보세요!</p>
            </div>
          </Link>
          <a className={cx('column')} href="/trade" target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            <div className={cx('description')}>
              <h3>리얼 배송</h3>
              <p>RN Center <br/>언제나 환영입니다.</p>
            </div>
          </a>
        </div>
        <div className={cx('my-message', 'responsive')}>
          <div>
          배송은 바로 보내드립니다.<br/>
          자주 사용해주시면, 뭐가 더 높아집니다.
          </div>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('email')}>
          <EmailIcon/> wn@richnet.com
        </div>
        <div className={cx('copyright')}>
          Rich.net 대표이사: 우종민<br />
          사업자등록번호: 000-00-000
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomePage;
