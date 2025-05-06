import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { login, setUser } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

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
                console.log(error.message);
            })


    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-200 flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">Welcome Back</h2>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div className='relative'>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
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
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to={"/auth/register"} className="text-primary font-medium hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
