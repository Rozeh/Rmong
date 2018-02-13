import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterTemplate = ({children}) => {
  return (
    <div className={cx('register-template')}>
      <h1>회원 등록</h1>
      <p>약관 확인</p>
      <section>
        {children}
      </section>
    </div>
  );
};

export default RegisterTemplate;
