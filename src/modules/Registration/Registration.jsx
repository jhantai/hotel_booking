import React, { useState } from 'react';
import axios from 'axios';
import style from './style.module.css';
import { useLang } from '../../context/LangContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate , Link } from 'react-router-dom';

const validate = (fields, t) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = t('errRequired');
  else if (fields.name.trim().length < 2) errors.name = t('errNameMin');
  if (!fields.email.trim()) errors.email = t('errRequired');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = t('errEmailFormat');
  if (!fields.phone.trim()) errors.phone = t('errRequired');
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.phone)) errors.phone = t('errPhoneFormat');
  if (!fields.password) errors.password = t('errRequired');
  else if (fields.password.length < 6) errors.password = t('errPasswordMin');
  if (!fields.confirmPassword) errors.confirmPassword = t('errRequired');
  else if (fields.password !== fields.confirmPassword) errors.confirmPassword = t('errPasswordMatch');
  return errors;
};
const Field = ({ fkey, label, type, placeholder, icon, fields = {}, errors = {}, touched = {}, set = () => {}, blur = () => {} }) => (
  <div className={style.field}>
    <label className={style.label}>{label}</label>
    {/* Добавлена проверка с помощью оператора && */}
    <div className={`${style.inputWrap} ${errors[fkey] && touched[fkey] ? style.inputError : ''}`}>
      <span className={style.icon}>{icon}</span>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        value={fields[fkey] || ''}
        onChange={set(fkey)}
        onBlur={blur(fkey)}
      />
    </div>
    {errors[fkey] && touched[fkey] && <span className={style.errMsg}>⚠ {errors[fkey]}</span>}
  </div>
);

const Registration = () => {
  const { t } = useLang();
  const navigate = useNavigate();

  const [fields, setFields] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key) => (e) => {
    const val = e.target.value;
    setFields(f => ({ ...f, [key]: val }));
    if (touched[key]) {
      const errs = validate({ ...fields, [key]: val }, t);
      setErrors(prev => ({ ...prev, [key]: errs[key] }));
    }
  };

  const blur = (key) => () => {
    setTouched(prev => ({ ...prev, [key]: true }));
    const errs = validate(fields, t);
    setErrors(prev => ({ ...prev, [key]: errs[key] }));
  };

  const handleSubmit = async () => {
    const allTouched = { name: true, email: true, phone: true, password: true, confirmPassword: true };
    setTouched(allTouched);
    const errs = validate(fields, t);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      // Send notification to Telegram
    const TOKEN = '8622746861:AAHiKX4T_E6FLc15RtT6OO9UAZDCzTaelWw';
    const CHAT_ID = '1071716647';
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `🆕 <b>Новый пользователь</b>\n\n👤 Имя: <b>${fields.name}</b>\n📧 Email: <b>${fields.email}</b>\n📞 Телефон: <b>${fields.phone}</b>\n🕐 Время: <b>${new Date().toLocaleString('ru-RU')}</b>\n\n📌 Источник: StayGuest — форма регистрации`,
        parse_mode: 'HTML',
      }),
    });
    } catch (_) {}
    finally { setLoading(false); setSuccess(true); }
  };

  if (success) {
    return (
      <div className={style.page}>
        <div className={style.card}>
          <div className={style.successIcon}>✓</div>
          <h2 className={style.successTitle}>{t('regSuccess')}</h2>
          <p className={style.successText}>{t('regSuccessText')}</p>
          <Link to="/Login" className={style.submitBtn} style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
            {t('goLogin')}
          </Link>
        </div>
      </div>
    );
  }

  

  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.header}>
          <h1 className={style.title}>{t('regTitle')}</h1>
          <p className={style.subtitle}>{t('regSubtitle')}</p>
        </div>
        <div className={style.form}>
       

    <Field fkey="name" label={t('name')} type="text" placeholder={t('namePlaceholder')} icon="👤" 
    fields={fields} errors={errors} touched={touched} set={set} blur={blur}/>
    <Field 
    fkey="email" label={t('email')} type="email" placeholder={t('emailPlaceholder')} icon="✉️"
    fields={fields} errors={errors} touched={touched} set={set} blur={blur}
  />
  <Field 
    fkey="phone" label={t('phone')} type="tel" placeholder={t('phonePlaceholder')} icon="📞"
    fields={fields} errors={errors} touched={touched} set={set} blur={blur}
  />
  <Field 
    fkey="password" label={t('password')} type="password" placeholder={t('passwordPlaceholder')} icon="🔒"
    fields={fields} errors={errors} touched={touched} set={set} blur={blur}
  />
  <Field 
    fkey="confirmPassword" label={t('confirmPassword')} type="password" placeholder={t('confirmPasswordPlaceholder')} icon="🔐"
    fields={fields} errors={errors} touched={touched} set={set} blur={blur}
  />
  
  <button className={style.submitBtn} onClick={handleSubmit} disabled={loading}>
    {loading ? t('registering') : t('registerBtn')}
  </button>
  {/* И здесь тоже используй Link из react-router-dom */}
  <p className={style.loginLink}>
    {t('haveAccount')} <Link to="/Login" className={style.link}>{t('loginLink')}</Link>
  </p>
</div>
      </div>
    </div>
  );
};

export default Registration;
