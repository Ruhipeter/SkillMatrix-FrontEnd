import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './login/login';
import HomePage from './HomePage/HomePage';
import ManagerHomePage from './ManagerHomePage/ManagerHomePage';
import BasicDetails from './ManagerHomePage/BasicDetails';
import SkillMatrix from './ManagerHomePage/skillMatrix';
import TeamSkillDetails from './ManagerHomePage/teamSkillDetails';
import { useSelector } from 'react-redux';
import Skills from './SkillPageUser/Skills';
import ApprovalPage from './ManagerHomePage/ApprovalPage';
import EmpRatingPage from './ManagerHomePage/EmployeeRatings'

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
          path="/ManagerHomePage"
          element={
            <RequireAuth redirectTo="/">
              <ManagerHomePage />
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/BasicDetails"
          element={
            <RequireAuth redirectTo="/">
              <BasicDetails/>
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/SkillMatrix"
          element={
            <RequireAuth redirectTo="/">
              <SkillMatrix/>
            </RequireAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/TeamSkillDetails"
          element={
            <RequireAuth redirectTo="/">
              <TeamSkillDetails/>
            </RequireAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/ApprovalPage"
          element={
            <RequireAuth redirectTo="/">
              <ApprovalPage/>
            </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/EmployeeRating"
          element={
            <RequireAuth redirectTo="/">
              <EmpRatingPage/>
            </RequireAuth>
          }
        />
      </Routes>
      


    </BrowserRouter>
  );
}

export default App;
