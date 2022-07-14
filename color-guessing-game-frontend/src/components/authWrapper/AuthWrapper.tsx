import React from 'react';
import {  Navigate } from 'react-router-dom';

interface AuthWrapperProps {
    children?: JSX.Element;
    currentUser: Model.User.User | null
}
const AuthWrapper = (props: AuthWrapperProps) => {
    return !props.currentUser ? (
        <Navigate to={'/welcome'} replace/>
    ) : (
        <Navigate to={'/home'} replace/>
    );
}

export default AuthWrapper;