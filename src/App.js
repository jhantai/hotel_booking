import React from 'react';
import Footer from './modules/Footer/Footer';
import Routess from './Routess/Routess';
import style from './style.module.css';
import { AuthProvider } from './context/AuthContext';
import { LangProvider } from './context/LangContext';

const App = () => {
  return (
    <LangProvider>
      <AuthProvider>
        <div className={style.stylee}>
          <Routess />
          <Footer className={style.footer_app} />
        </div>
      </AuthProvider>
    </LangProvider>
  );
};

export default App;
