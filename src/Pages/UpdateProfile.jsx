import React, { use, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const data = use(AuthContext)
    const { user, setUser, updateUser } = data;
    // const { displayName, photoURL } = user;
    // console.log(user?.email);

    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {

                const updatedUser = {
                    ...auth.currentUser,
                    displayName: name,
                    photoURL: photo,
                };
                toast("Profile updated successfully!");
                setUser(updatedUser);
            })
            .catch((error) => {
                toast.error("Failed to update profile: " + error.message);
            });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-200 px-4">
            <Helmet><title>Update Profile | Your Jobs</title></Helmet>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md h-[50vh] mr-5 space-y-5">
                <img className="mx-auto rounded-full w-[100px] h-[100px] mb-8" src={user?.photoURL} alt="" />
                <h3 className=""><span className="text-accent font-semibold">Name : </span>{user?.displayName}</h3>
                <p className=""><span className="text-accent font-semibold">Email : </span>{user?.email}</p>
            </div>
            <ToastContainer />
            <form onSubmit={handleProfileUpdate} className="bg-white p-8 rounded shadow-md w-full max-w-md h-[50vh]">
                <h2 className="text-2xl font-semibold text-center text-accent mb-4">
                    Update Your Profile
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Display Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter your photo URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>

                <button type="submit" className="w-full bg-primary text-white py-2 rounded ">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
