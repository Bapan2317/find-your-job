import React from 'react';
import hero from '../assets/hero.jpg';

const Banner = () => {
    return (
        <div className=' bg-[#94c43d]'>
            <div className="w-11/12 md:w-10/12 mx-auto md:flex justify-between items-center py-6 md:py-10">
                <div className='space-y-3 md:space-y-5 mb-8 md:mb-0'>
                    <h1 className="text-xl md:text-xl lg:text-3xl font-bold text-accent">Find Your Dream Job Today</h1>
                    <p className="text-sm text-base-100 w-10/12">
                        Browse jobs from top companies, filter by role or location, and apply with confidence — all in one simple, user-friendly platform.
                    </p>
                    <div className='flex'>

                        <input type="text" name="find" className='bg-base-300 px-5 py-1 rounded-l-lg w-full md:w-[200px] lg:w-auto' placeholder='Find your Job' />

                        <button className="btn rounded-none rounded-r-lg bg-accent text-base-100">Find Naw</button>
                    </div>
                </div>
                <div className="logo">
                    <img className='w-[800px] rounded-md' src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;