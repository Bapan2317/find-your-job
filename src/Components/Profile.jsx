import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
    const { user } = use(AuthContext)
    // const { displayName } = user
    return (
        <div className='min-h-screen bg-base-300 pt-8 flex flex-col items-center'>
            <div className=" gap-3 text-start space-y-2 md:text-xl bg-base-100 h-[80vh] p-6 w-[80vw] md:w-md rounded">
                {
                    user && <>
                        <img className='w-[100px] mx-auto h-[100px] rounded-full border-black border-2 mb-12' src={user.photoURL} alt="" />
                        <h3 className=''><span className='font-semibold'>Name : </span>{user.displayName}</h3>
                        <p className=""> <span className='font-semibold'>Email : </span>{user.email}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Profile;