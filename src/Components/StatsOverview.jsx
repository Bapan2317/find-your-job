import React from 'react';

const StatsOverview = () => {

    return (

        <div className=' bg-[#94c43d95] md:py-12'>
            <div className="stats shadow flex md:w-2xl mx-auto flex-col md:flex-row ">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                    </div>
                    <div className="stat-title">Total Jobs Posted</div>
                    <div className="stat-value text-green-700">12.3K</div>
                    <div className="stat-desc">New 1.2K this week</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="stat-title">Jobs Successfully Filled</div>
                    <div className="stat-value text-green-700">8.9K</div>
                    <div className="stat-desc">↑ 15% from last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value text-green-700">4.2K</div>
                    <div className="stat-title">Active Employers</div>
                    <div className="stat-desc text-accent">+320 this month</div>
                </div>

            </div>

        </div>
    );
};

export default StatsOverview;