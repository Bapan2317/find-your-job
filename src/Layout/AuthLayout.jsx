import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <section className="">
                <Outlet />
            </section>
        </div>
    );
};

export default AuthLayout;