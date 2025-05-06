import React from 'react';
import CompaniesList from './CompaniesList';




const Companies = ({ data }) => {

    const companies = data;
    // const { id } = companies;
    // console.log(companies.ID);


    return (
        <div className=''>
            <div className='bg-[#94c43d70]'>
                <div className="w-10/12 md:w-7/12 mx-auto text-center py-6">
                    <h2 className='text-xl md:text-2xl text-accent font-bold mb-2'>All companies are listed here.</h2>
                    <p className='text-sm text-accent-content'>
                        This page showcases a variety of companies from different industries, <br /> providing detailed information about each, including their logo, location, and website.
                    </p>
                </div>
            </div>
            {
                companies.map((company, i) => <CompaniesList key={i} company={company}></CompaniesList>)
            }
        </div>
    );
};

export default Companies;