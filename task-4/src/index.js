import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext, useContext, useState } from "react";
import './index.css';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

const AuthStatus = () => {
  const { isLoggedIn, login, logout } = useUserAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, User!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

 function App() {
  return (
    <UserAuthProvider>
      <AuthStatus />
    </UserAuthProvider>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
