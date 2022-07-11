import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/signUpPage/SignUpPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LoginPage from "./pages/loginPage/LoginPage";
import LandingPage from "./pages/landingPage/LandingPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/home'} element={<HomePage />}/>
            <Route path={'/signup'} element={<SignUpPage />}/>
            <Route path={'/login'} element={<LoginPage />}/>
            <Route path={'/'} element={<LandingPage />}/>
            <Route path={'*'} element={<ErrorPage />}/>
        </Routes>
    </>
  );
}

export default App;
