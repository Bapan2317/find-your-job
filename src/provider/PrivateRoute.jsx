import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { SiElastic } from 'react-icons/si';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    if (loading) {
        return <Loading />
    }
    if (user) {

        return children
    }
    return <Navigate to="/auth/login"></Navigate>

};

export default PrivateRoute;