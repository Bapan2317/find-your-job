import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleCompanyJobs from './SingleCompanyJobs';
// use react-router-dom

const Company = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const company = data.find(c => c.id === id);

    // console.log(jobs);



    return (
        <div className="p-4 w-11/12 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {
                    company.jobs.map(singleCompanyJob => <SingleCompanyJobs
                        key={singleCompanyJob.id}
                        singleCompanyJob={singleCompanyJob}
                    >
                    </SingleCompanyJobs>)
                }
            </div>
        </div>
    );
};

export default Company;
