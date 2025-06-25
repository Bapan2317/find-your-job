
import React, { useContext } from 'react';
import { AuthContext } from 'c:/projects/assignment-9/src/provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // ✅ সঠিক Hook

    if (loading) {
        return <Loading />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/auth/login" />;
};

export default PrivateRoute;