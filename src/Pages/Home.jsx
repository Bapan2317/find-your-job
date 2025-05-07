import React from 'react';
import Banner from '../Components/Banner';
import Companies from '../Components/Companies';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';
import SuccessStories from '../Components/SuccessStories';
import StatsOverview from '../Components/StatsOverview';

const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Helmet><title>Home | Your Jobs</title></Helmet>
            <Banner></Banner>
            <Companies data={data}></Companies>
            <SuccessStories></SuccessStories>
            <StatsOverview></StatsOverview>
        </div>
    );
};

export default Home;