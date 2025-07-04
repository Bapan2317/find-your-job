import './navbar.css';
import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../provider/AuthProvider';
import userLogo from '../assets/userLogo.jpg';
import { toast } from 'react-toastify';


const Header = () => {
    const { user, setUser, logout } = use(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(result => {
                toast("Log out successful")
                setUser(null)
                navigate("/")
            })
            .catch(error => {
                toast(error.message)
            })
    }

    const handleProfile = () => {
        navigate("/profile")
    }

    const links = <>
        <li><NavLink to={"/"} >Home</NavLink></li>
        {
            user && <li><NavLink to={"/updateProfile"}>Profile</NavLink></li>
        }
        <li><NavLink to={"/contactUs"}>Contact Us</NavLink></li><li>
            <NavLink to="/blog">Blog</NavLink></li>
    </>
    return (

        <div>
            <div className="navbar bg-[#94c43d20] md:px-8">
                <div className="navbar-start flex-wrap">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className='hidden md:flex gap-2 items-center'>
                        <img className='w-14' src={logo} alt="" />
                        <h4 className='font-bold text-primary uppercase md:text-xl hidden md:flex'>Your Jobs</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-accent-content font-semibold ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">

                    <div className="mr-5 flex  items-center md:gap-4">
                        {
                            user && <>
                                <p className='text-xs md:text-sm truncate'>{user && user.displayName}</p>
                                {
                                    <img onClick={handleProfile} className='w-8 md:w-10 h-8 md:h-10 rounded-full cursor-pointer'
                                        src={user.photoURL ? user.photoURL : userLogo} />
                                }
                            </>
                        }
                    </div>
                    {/* <img className='w-12 border-3 border-primary rounded-full' src={user && user.photoURL} alt="" /> */}
                    {
                        user ? <button onClick={handleLogout} className='bg-primary text-base-100 px-2 text-xs py-1 rounded md:btn md:text-base-100 btn-primary'>Logout</button> :
                            <>
                                <NavLink className="bg-primary text-base-100 mr-4 px-3 py-1.5 rounded text-xs font-semibold md:btn md:bg-primary md:text-base-100" to={"/auth/login"}>Login</NavLink>
                                <NavLink className="bg-primary text-base-100 mr-4 px-3 py-1.5 rounded text-xs font-semibold md:btn md:bg-primary md:text-base-100" to={"/auth/register"}>Register</NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;