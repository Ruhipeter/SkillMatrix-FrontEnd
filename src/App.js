import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './login/login';
import HomePage from './HomePage/HomePage';
import ManagerHomePage from './ManagerHomePage/ManagerHomePage';
import { useSelector } from 'react-redux';
import Skills from './Skills';
function getAuth() {
  const loggedIn = localStorage.getItem("LoggedIn");
  if (loggedIn == "true") {
    return true;
  } else {
    return false;
  }
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} activeClassName="active" />
      </Routes>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth redirectTo="/">
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route path="/:skill/:qid"
          element={
          <RequireAuth redirectTo="/">
          <Skills />
          </RequireAuth>

          } />
      </Routes>
    
      <Routes>
        <Route
          path="/Manager Home Page"
          element={
            <RequireAuth redirectTo="/">
              <ManagerHomePage />
            </RequireAuth>
          }
        />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
