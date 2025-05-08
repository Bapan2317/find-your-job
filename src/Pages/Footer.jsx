import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className=' bg-primary py-10 text-xs text-base-200'>
            <div className="flex justify-between flex-col gap-5 md:flex-row md:w-10/12 mx-auto px-5">
                <div className="flex flex-row md:flex-col gap-6 md:gap-2">

                    <Link>Contact Us</Link>
                    <Link>About Us</Link>
                    <Link>Community</Link>
                </div>
                <div className="flex flex-row md:flex-col gap-6 md:gap-2">

                    <Link>Therm and conditions</Link>
                    <Link>Privacy policy</Link>
                    <Link>Cookie policy</Link>

                </div>
                <div className="space-y-2">
                    <h4 className='font-semibold md:pb-2'>Lets chats</h4>
                    {/* <p className='text-white '>bapan2317@gmail.com</p> */}
                    <div className="flex gap-5 *:p-1 *:text-black *:rounded-full *:bg-base-300">
                        <Link to={"https://www.facebook.com/bapan.modak.965"}> <FaFacebook /> </Link>
                        <Link to={"https://www.facebook.com/bapan.modak.965"}> <FaTwitter /> </Link>
                        <Link to={"https://www.facebook.com/bapan.modak.965"}> <FaGithub /> </Link>
                        <Link to={"https://www.facebook.com/bapan.modak.965"}> <FaLinkedin /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;