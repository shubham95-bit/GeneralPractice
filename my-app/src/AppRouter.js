import React, { useState, useContext, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';
import Protected from './Protected';
import AuthApi from './AuthApi';
import { BrowserRouter } from 'react-router-dom';
import WithLoading from './WithLoading';

const DataLoading = WithLoading(Dashboard);

const  AppRouter = () =>{

  const Auth = useContext(AuthApi);
  console.log('Auth.auth',Auth.auth);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Dashboard' element={<Protected auth={Auth.auth}><DataLoading/></Protected>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default AppRouter;
