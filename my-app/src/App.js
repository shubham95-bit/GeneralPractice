import React, { useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import AuthApi from './AuthApi';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <AuthApi.Provider value={{auth, setAuth}}>
        <AppRouter/>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
