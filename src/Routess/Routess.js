import React from 'react';
import HomePager from "../Pages/HomePage/HomePager";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import style from './style.module.css'
import DetailedInfo from '../Pages/DetailedInfo/DetailedInfo';
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../modules/Login/Login';
import Registration from '../modules/Registration/Registration';
import Header from '../modules/Header/Header';

const Routess = () => {
  return (
  <BrowserRouter>
   
    <div className={style.content}>
    <Routes>
      <Route path='/' element={<HomePager />} />
      <Route path='/Details/:id' element={<DetailedInfo  />} />
     <Route path='/Login' element={<SignIn  />} />
      <Route path='/Registration' element={<SignUp />} /> 
    </Routes>
    </div>
   
    </BrowserRouter>
  )
}

export default Routess