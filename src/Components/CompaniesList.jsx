import React, { use } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const CompaniesList = ({ company }) => {
    const { user } = use(AuthContext);
    const location = useLocation()
    const { title, description, logo, id } = company;
    // console.log(id);
    return (
        <div className="border-b-1 border-base-300 hover:bg-[#94c43d30] py-8">
            <Link to={`company/${id}`} className=' flex flex-col md:flex-row justify-between gap-5 md:w-10/12 lg:w-8/12 px-4 mx-auto items-center text-center md:text-start'>
                <div className=" md:w-11/12">
                    <h2 className='md:text-2xl font-semibold text-primary mb-2'>{title}</h2>
                    <p className='text-accent-content text-sm md:text-lg'>{description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <img className='w-[300px] h-[200px] md:w-[400px] md:h-[200px] border-white border-2 rounded-md' src={logo} alt="" />

                    {/* <h4 className='md:text-5xl hidden md:flex '><SlArrowRight /></h4> */}

                </div>
            </Link>
        </div>
    );
};

export default CompaniesList;