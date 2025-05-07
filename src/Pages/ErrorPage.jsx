import React from 'react';
import errorImage from '../assets/3747371.jpg';
import Header from '../Components/Header';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="">
            <div className="">
                <Header />
            </div>
            <div className='min-h-screen px-6 flex flex-col justify-center items-center'>
                <img className='w-md' src={errorImage} alt="" />
                <h2 className='md:text-2xl lg:text-4xl text-center font-bold'>Oops Page Not Found!!    </h2>
                <Link to="/" className='btn btn-primary mt-5'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;