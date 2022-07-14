import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/signUpPage/SignUpPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LoginPage from "./pages/loginPage/LoginPage";
import LandingPage from "./pages/landingPage/LandingPage";
import HomePage from "./pages/homePage/HomePage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import {FETCH_CURRENT_USER} from "./state/actions/userActions";
import AuthWrapper from "./components/authWrapper/AuthWrapper";

interface AppStateProps {
    currentUser: Model.User.User
}

interface AppDispatchProps {
    fetchCurrentUser: ()=>({type:string})
}

type AppProps = AppStateProps & AppDispatchProps

function App(props: AppProps) {

    useEffect(()=>{
        props.fetchCurrentUser()
    }, [])

  return (
    <>
        <Routes>
            <Route path={'/signup'} element={<SignUpPage />}/>
            <Route path={'/login'} element={<LoginPage />}/>
            <Route path={'/welcome'} element={<LandingPage />}/>
            <Route element={<ProtectedRoute redirectPath={'/welcome'} currentUser={props.currentUser}/>}>
                <Route path={'/home'} element={<HomePage />} />
            </Route>
            <Route path={'/'} element={<AuthWrapper currentUser={props.currentUser} />} />
            <Route path={'*'} element={<ErrorPage />}/>
        </Routes>
    </>
  );
}

const mapStateToProps = (state: any) => {
    return({
        currentUser: state.user.currentUser
    })
}

const mapDispatchToProps = {
    fetchCurrentUser: ()=> ({type: FETCH_CURRENT_USER})
}

export default connect<AppStateProps, AppDispatchProps>(mapStateToProps, mapDispatchToProps)(App);
