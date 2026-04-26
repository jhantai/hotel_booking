import React from 'react';
import LOGO from '../../assets/images/LOGO_DIPLOm.png';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { useAuth } from '../../context/AuthContext';
import { useLang } from '../../context/LangContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  const { t, lang, toggleLang } = useLang();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <div>
        <a href="/">
          <img src={LOGO} alt="" className={style.logo} />
        </a>
      </div>
      <ul className={style.navigation}>
        <li><a className={style.aaa} href="/">{t('hotels')}</a></li>
        <li><a className={style.aaa} href="https://www.aviasales.kg" target="_blank" rel="noreferrer">{t('flights')}</a></li>
        <li>
          <span className={style.aaa} onClick={() => navigate('/tours')} style={{ cursor: 'pointer' }}>
            {t('excursions')}
          </span>
        </li>
      </ul>
      <div className={style.auth_buttons}>
        <button className={style.langBtn} onClick={toggleLang} title="Switch language">
          {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU'}
        </button>
        {isLoggedIn ? (
          <>
            <span className={style.userGreet}>👋 {t('hello')}, {user.name}</span>
            <button className={style.sign_in} onClick={handleLogout}>{t('logout')}</button>
          </>
        ) : (
          <>
            <button className={style.sign_in} onClick={() => navigate('/Login')}>{t('signIn')}</button>
            <button className={style.sign_up} onClick={() => navigate('/Registration')}>{t('signUp')}</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
