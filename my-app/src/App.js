import React, { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import AuthApi from './AuthApi';
// import Cookies from 'js-cookie';

function App() {

  const [auth, setAuth] = useState(false);

  //Yaha pe local storage se token check karke usko common headers me daalna h.


  return (
    <div>
      <AuthApi.Provider value={{auth, setAuth}}>
        <AppRouter/>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
