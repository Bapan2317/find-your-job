import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { register, setUser, updateUser, googleSignIn } = use(AuthContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    // const [userName, setUserName] = useState("")



    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("")
        register(email, password, name, photo)
            .then(result => {
                const user = result.user

                navigate("/")
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    })
                    .catch(error => {
                        toast(error.message);
                        setUser(user)
                    })
            })
            .catch(error => {
                setError(error.message)
                toast(error.message);

            })

    }

    const googleSignin = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
                toast(error.message);
            })
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center px-4">
            <Helmet><title> Register | Your Jobs</title></Helmet>
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">Create an Account</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />

                    </div>
                    {/* photo url */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Your photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    {/* email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    {/* password */}
                    <div className='relative'>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute top-9 right-4">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
                    >
                        Register
                    </button>
                    <div>{error && <p className='text-red-400 font-semibold'>{error}</p>}</div>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to={"/auth/login"} className="text-primary font-medium hover:underline">
                        Login here
                    </Link>

                    <div onClick={googleSignin} className="flex gap-2 mt-6 cursor-pointer rounded-md bg-base-200 items-center text-sm px-4 py-2 border justify-center border-base-300">
                        <FcGoogle size={22} /> Sign In with Google
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Register;
