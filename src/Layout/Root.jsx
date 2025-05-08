import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Pages/Footer';
import Loading from '../Pages/Loading';

const Root = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;