
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, setUser, logout } = use(AuthContext)


    const handleLogout = () => {
        logout()
            .then(result => {
                console.log("Log out successful");
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink>Home</NavLink></li>
        {
            user && <li><NavLink>Profile</NavLink></li>
        }
        <li><NavLink>Contact Us</NavLink></li><li>
            <NavLink>Blog</NavLink></li>
    </>
    return (

        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
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
                    <Link className='flex gap-2 items-center'>
                        <img className='w-14' src={logo} alt="" />
                        <h4 className='font-bold text-primary uppercase text-xl'>Your Jobs</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-accent-content font-semibold ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a onClick={handleSignUp} className="btn">Button</a> */}

                    {/*  */}

                    {user && <p>{user.email}</p>}

                    {
                        user ? <button onClick={handleLogout} className='btn'>Logout</button> :
                            <>
                                <NavLink className="bg-primary text-base-100 btn mr-4" to={"/auth/login"}>Login</NavLink>
                                <NavLink className="bg-primary text-base-100 btn" to={"/auth/register"}>Register</NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;