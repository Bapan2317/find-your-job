import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userLogo from '../assets/userLogo.jpg';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = use(AuthContext)
    // const { displayName } = user
    return (
        <div className='min-h-screen bg-base-300 pt-8 flex flex-col items-center'>
            <Helmet><title>Profile | Your Jobs</title></Helmet>
            <div className=" gap-3 text-start space-y-2 md:text-xl bg-base-100 h-[80vh] p-6 w-[80vw] md:w-md rounded">
                {
                    user && <>
                        <img className='w-[100px] mx-auto h-[100px] rounded-full mb-12' src={user.photoURL ? user?.photoURL : userLogo} alt="" />
                        <h3 className=''><span className='font-semibold'>Name : </span>{user.displayName}</h3>
                        <p className=""> <span className='font-semibold'>Email : </span>{user.email}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Profile;