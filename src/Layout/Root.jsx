import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Pages/Footer';
import Loading from '../Pages/Loading';

const Root = () => {

    const [loading, setLoading] = useState(true); // শুরুতে loading true

    useEffect(() => {
        // এখানে 2 সেকেন্ড পর loader বন্ধ হবে (ডেমো হিসেবে)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // clean up
    }, []);

    if (loading) {
        return <Loading />; // Loader component দেখাও
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