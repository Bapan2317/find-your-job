import React, { use, useRef, useState } from 'react';
import { Link, Links, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Header from '../Components/Header';



const Login = () => {

    const { login, setUser, googleSignIn, forgetPassword } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const emailRef = useRef()

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                console.log(result);
                const user = result.user;
                setUser(user)
                navigate("/")
            })
            .catch(error => {
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

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(() => {
                toast("Reset link sent. Check your email.");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="">
            <Header />
            <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-200 flex items-center justify-center px-4">
                <Helmet><title> Login | Your Jobs</title></Helmet>

                <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center text-primary">Welcome Back</h2>

                    {/* form */}

                    <form onSubmit={handleSignIn} className="space-y-4">

                        {/* Email */}

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                ref={emailRef}
                                name="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        <div className='relative'>

                            {/* password */}

                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                            />

                            {/* toggle show password */}

                            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-9 right-4">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>

                            {/* Forget Password */}

                            <div className="">
                                <a onClick={handleResetPassword} className='text-xs text-accent-content hover:underline'>Forget password</a>
                                <ToastContainer />
                            </div>
                        </div>

                        {/* Login button */}

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {/* redirect Register  */}

                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to={"/auth/register"} className="text-primary font-medium hover:underline">
                            Register here
                        </Link>
                    </p>

                    {/* social login */}

                    <div onClick={googleSignin} className="flex gap-2 cursor-pointer rounded-md bg-base-200 items-center text-sm px-4 py-2 border justify-center border-base-300">
                        <FcGoogle size={22} /> Sign In with Google
                    </div>
                    <div className="flex gap-2 cursor-pointer rounded-md bg-base-200 items-center text-sm px-4 py-2 border justify-center border-base-300">
                        <FaGithub size={22} /> Sign In with Github
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
