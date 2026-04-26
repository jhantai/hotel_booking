import React from 'react';
import HomePage from "../Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from './style.module.css';
import DetailedInfo from '../Pages/DetailedInfo/DetailedInfo';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Tours from '../Pages/Tours/Tours';
import Header from '../modules/Header/Header';

const Routess = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.content}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Details/:id' element={<DetailedInfo />} />
          <Route path='/Login' element={<SignIn />} />
          <Route path='/Registration' element={<SignUp />} />
          <Route path='/tours' element={<Tours />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routess;
