import React from 'react';
import styles from './IntroQuestion.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IntroQuestion = ({onClick}) => (
  <div className={cx('question')}>          
  <div>
    <h1>
      상쾌! RN<br/>
      <b>편리한</b> 비지니스를 도와드려요!
    </h1>
    <p>
      다양한 API를 이용하여 편리한 쇼핑 환경을 
      <br/>만들어 보세요.
      <br/><br/>쉽게 사용 가능합니다.
    </p>
  </div>
  <div className={cx('button')} onClick={onClick}>
    시작하기
  </div>
</div>
);

export default IntroQuestion;
