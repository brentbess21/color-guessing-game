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
import {fetchCurrentUser} from "./state/actions/userActions";
import AuthWrapper from "./components/authWrapper/AuthWrapper";
import GamePage from "./pages/gamePage/GamePage";
import LoadingPage from "./pages/loadingPage/LoadingPage";

interface AppStateProps {
    currentUser: Model.User.User;
    loading: boolean;
}

interface AppDispatchProps {
    fetchCurrentUser: ()=> void;
}

type AppProps = AppStateProps & AppDispatchProps

function App(props: AppProps) {

    useEffect(()=>{
        props.fetchCurrentUser()
    }, []);

    function renderApp () {
        if(props.loading) return <LoadingPage />
        return (
            <>
                <Routes>
                    <Route path={'/signup'} element={<SignUpPage />}/>
                    <Route path={'/login'} element={<LoginPage />}/>
                    <Route path={'/welcome'} element={<LandingPage />}/>
                    <Route element={<ProtectedRoute redirectPath={'/'} currentUser={props.currentUser}/>}>
                        <Route path={'/home'} element={<HomePage />} />
                        <Route path={'/game'} element={<GamePage/>} />
                    </Route>
                    <Route path={'/'} element={<AuthWrapper currentUser={props.currentUser} />} />
                    <Route path={'*'} element={<ErrorPage />}/>
                </Routes>
            </>
        );

    }

  return (
       <>
           {renderApp()}
       </>
  );
}

const mapStateToProps = (state: any) => {
    return({
        loading: state.user.loading,
        currentUser: state.user.currentUser
    })
}

const mapDispatchToProps = {fetchCurrentUser}

export default connect<AppStateProps, AppDispatchProps>(mapStateToProps, mapDispatchToProps)(App);
