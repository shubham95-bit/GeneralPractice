import React, { useState, useContext } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';
import Protected from './Protected';
import AuthApi from './AuthApi';
import { BrowserRouter } from 'react-router-dom';

function AppRouter() {
  const Auth = useContext(AuthApi);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Dashboard' element={<Protected auth={Auth.auth}><Dashboard/></Protected>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default AppRouter;
