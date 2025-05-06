import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className=' bg-primary py-10 text-xs text-accent'>
            <div className="flex justify-between md:w-10/12 mx-auto px-5">
                <div className="flex flex-col gap-2">

                    <Link>Contact Us</Link>
                    <Link>About Us</Link>
                    <Link>Community</Link>


                </div>
                <div className="flex flex-col gap-2">

                    <Link>Therm and conditions</Link>
                    <Link>Privacy policy</Link>
                    <Link>Cookie policy</Link>

                </div>
                <div className="space-y-2">
                    <h4>Lets chats</h4>
                    {/* <p className='text-white '>bapan2317@gmail.com</p> */}
                    <div className="flex gap-5">
                        <Link> <FaFacebook /> </Link>
                        <Link> <FaTwitter /> </Link>
                        <Link> <FaGithub /> </Link>
                        <Link> <FaLinkedin /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;