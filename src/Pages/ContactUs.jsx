import React from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <Helmet><title>Contact Us | Your Jobs</title></Helmet>
            <div className="bg-gray-500 shadow-md rounded-lg p-8 max-w-xl w-full">
                <h2 className="text-3xl font-semibold text-center text-accent mb-6">
                    Contact Us
                </h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    ></textarea>
                    <button
                        type="button"
                        className="w-full bg-primary text-white py-2 px-4 rounded-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
