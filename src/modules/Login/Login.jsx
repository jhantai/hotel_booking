import React, { useState } from 'react';
import style from '../Registration/style.module.css';
import { useLang } from '../../context/LangContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const TOKEN = '8622746861:AAHiKX4T_E6FLc15RtT6OO9UAZDCzTaelWw';
const CHAT_ID = '1071716647';

const sendTelegram = async (text) => {
  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    });
  } catch (_) {}
};

const validate = (fields, t) => {
  const errors = {};
  if (!fields.email.trim()) errors.email = t('errRequired');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = t('errEmailFormat');
  if (!fields.password) errors.password = t('errRequired');
  else if (fields.password.length < 6) errors.password = t('errPasswordMin');
  return errors;
};

const Field = ({ fkey, label, type, placeholder, icon, fields, errors, touched, set, blur }) => (
  <div className={style.field}>
    <label className={style.label}>{label}</label>
    <div className={`${style.inputWrap} ${errors[fkey] && touched[fkey] ? style.inputError : ''}`}>
      <span className={style.icon}>{icon}</span>
      <input
        className={style.input} type={type} placeholder={placeholder}
        value={fields[fkey]} onChange={set(fkey)} onBlur={blur(fkey)}
      />
    </div>
    {errors[fkey] && touched[fkey] && <span className={style.errMsg}>⚠ {errors[fkey]}</span>}
  </div>
);

const Login = () => {
  const { t } = useLang();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [fields, setFields] = useState({ email: '', password: '' });
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
    const allTouched = { email: true, password: true };
    setTouched(allTouched);
    const errs = validate(fields, t);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    const name = fields.email.split('@')[0];
    login({ name, email: fields.email });

    // Notify Telegram
    await sendTelegram(
      `🔑 <b>Вход в аккаунт</b>\n\n👤 Имя: <b>${name}</b>\n📧 Email: <b>${fields.email}</b>\n🕐 Время: <b>${new Date().toLocaleString('ru-RU')}</b>\n\n📌 Источник: StayGuest — форма входа`
    );

    setLoading(false);
    setSuccess(true);
    setTimeout(() => navigate('/'), 1200);
  };

  if (success) {
    return (
      <div className={style.page}>
        <div className={style.card}>
          <div className={style.successIcon}>✓</div>
          <h2 className={style.successTitle}>{t('loginSuccess')}</h2>
          <p className={style.successText}>{t('loginSuccessText')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.header}>
          <h1 className={style.title}>{t('loginTitle')}</h1>
          <p className={style.subtitle}>{t('loginSubtitle')}</p>
        </div>
        <div className={style.form}>
          <Field fkey="email" label={t('email')} type="email" placeholder={t('emailPlaceholder')} icon="✉️"
            fields={fields} errors={errors} touched={touched} set={set} blur={blur} />
          <Field fkey="password" label={t('password')} type="password" placeholder={t('passwordPlaceholder')} icon="🔒"
            fields={fields} errors={errors} touched={touched} set={set} blur={blur} />
          <button className={style.submitBtn} onClick={handleSubmit} disabled={loading}>
            {loading ? t('loggingIn') : t('loginBtn')}
          </button>
          <p className={style.loginLink}>
            {t('noAccount')} <Link to="/Registration" className={style.link}>{t('createAccount')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
