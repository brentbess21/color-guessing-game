import React, {ReactNode} from 'react';
import {  Outlet, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children?: JSX.Element;
    redirectPath: string;
    user?: Model.User.User;
}
const ProtectedRoute = (props: ProtectedRouteProps) => {
    if(!props.user) {
        return <Navigate to={props.redirectPath} replace />
    }
    return props.children ? props.children : <Outlet />
}

export default ProtectedRoute;