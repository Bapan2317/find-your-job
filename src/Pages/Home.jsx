import React from 'react';
import Banner from '../Components/Banner';
import Companies from '../Components/Companies';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Companies data={data}></Companies>
        </div>
    );
};

export default Home;