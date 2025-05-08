import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";

const Blog = () => {
    const blogs = useLoaderData()

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 min-h-screen ">
            <Helmet><title>Blog | Your Jobs</title></Helmet>
            <h1 className="text-3xl text-accent font-bold mb-12 text-center ">Our Latest Blog Posts</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((post) => (
                    <div key={post.id} className="border p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white">
                        <h2 className="text-xl text-primary font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        <p className="text-gray-700">{post.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;


