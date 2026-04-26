import React, { useState } from 'react';
import style from './style.module.css';
import CloseIcon from '@mui/icons-material/Close';
import geoIcon from '../../assets/images/location-sign-svgrepo-com.svg';
import dateIcon from '../../assets/images/date-range-svgrepo-com.svg';
import userIcon from '../../assets/images/user-icon-svgrepo-com.svg';
import phoneIcon from '../../assets/images/phone-call-svgrepo-com.svg';
import InputMaterial from '../../components/InputMaterial/InputMaterial';
import { showError, showInfo, showSuccess } from '../../utils/Alert';
import { useAuth } from '../../context/AuthContext';
import { useLang } from '../../context/LangContext';
import { useNavigate } from 'react-router-dom';

const ModalWindow = ({ active }) => {
  const { isLoggedIn } = useAuth();
  const { t } = useLang();
  const navigate = useNavigate();

  const [data, setData] = useState({ city: '', date: '', persons: 0, phone: '' });

  if (!isLoggedIn) {
    return (
      <div className={style.ModalWindowBlur} onClick={active}>
        <div className={style.ModalWindow} onClick={e => e.stopPropagation()}>
          <div className={style.closeBtn} onClick={active}><CloseIcon /></div>
          <div className={style.authRequired}>
            <div className={style.authIcon}>🔒</div>
            <h3 className={style.authTitle}>{t('bookRestrict')}</h3>
            <button
              className={style.authLoginBtn}
              onClick={() => { active(); navigate('/Login'); }}
            >
              {t('signIn')}
            </button>
            <button
              className={style.authRegBtn}
              onClick={() => { active(); navigate('/Registration'); }}
            >
              {t('createAccount')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.ModalWindowBlur} onClick={active}>
      <div className={style.ModalWindow} onClick={e => e.stopPropagation()}>
        <div className={style.closeBtn} onClick={active}><CloseIcon /></div>
        <h2>{t('bookModalTitle')}</h2>
        <div className={style.Inputs}>
          <InputMaterial icon={geoIcon} placeholder={t('city')} type="text" height="8vh" width="250px"
            onChange={e => setData(p => ({ ...p, city: e.target.value }))} />
          <InputMaterial icon={dateIcon} placeholder={t('date')} type="date" height="8vh" width="252px"
            onChange={e => setData(p => ({ ...p, date: e.target.value }))} />
          <InputMaterial icon={userIcon} placeholder={t('persons')} type="number" height="8vh" width="250px"
            onChange={e => setData(p => ({ ...p, persons: e.target.value }))} />
          <InputMaterial icon={phoneIcon} placeholder={t('phoneNum')} type="tel" height="8vh" width="250px"
            onChange={e => setData(p => ({ ...p, phone: e.target.value }))} />
          <input
            onClick={() => {
              if (data.city && data.date && data.persons) {
                const free = sessionStorage.getItem('free');
                if (free === 'true') showSuccess('Готово', t('bookSuccess'));
                else showError('Ошибка', t('bookError'));
              } else {
                showInfo('Отклонено', t('bookFill'));
              }
            }}
            className={style.Button}
            type="button"
            value={t('search')}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
