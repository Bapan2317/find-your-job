import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import Companies from '../Components/Companies';
import { Outlet, useLoaderData, } from 'react-router';
import SuccessStories from '../Components/SuccessStories';
import StatsOverview from '../Components/StatsOverview';
import Loading from './Loading';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Helmet><title>Home | Your Jobs</title></Helmet>
            <Banner></Banner>
            <Suspense fallback={<Loading />}>
                <Companies data={data}></Companies>
            </Suspense>
            <SuccessStories></SuccessStories>
            <StatsOverview></StatsOverview>
        </div>
    );
};

export default Home;