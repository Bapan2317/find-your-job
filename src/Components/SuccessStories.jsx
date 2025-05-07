import React from 'react';

const SuccessStories = () => {
    return (
        <div>
            <section className="bg-gray-100 py-10">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"I found my dream job through JobTrack in no time. Thank you!"</p>
                            <h4 className="mt-4 font-semibold">Rafi Ahmed</h4>
                            <span className="text-sm text-gray-500">Frontend Developer</span>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"JobTrack made the job search process so much easier. Highly recommended!"</p>
                            <h4 className="mt-4 font-semibold">Tania Islam</h4>
                            <span className="text-sm text-gray-500">UI Designer</span>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"I got a remote job at a US company within weeks! Amazing platform."</p>
                            <h4 className="mt-4 font-semibold">Rakib Hasan</h4>
                            <span className="text-sm text-gray-500">Software Engineer</span>
                        </div>

                        {/* Additional Cards */}
                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"Thanks to JobTrack, I landed my first job in the tech industry!"</p>
                            <h4 className="mt-4 font-semibold">Momena Sultana</h4>
                            <span className="text-sm text-gray-500">Junior Web Developer</span>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"The job alerts and quick notifications made all the difference in my job search!"</p>
                            <h4 className="mt-4 font-semibold">Samir Ahmed</h4>
                            <span className="text-sm text-gray-500">Full Stack Developer</span>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-xl transition duration-300">
                            <p className="text-gray-700">"I was able to apply for jobs effortlessly. Thank you, JobTrack!"</p>
                            <h4 className="mt-4 font-semibold">Rina Parveen</h4>
                            <span className="text-sm text-gray-500">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default SuccessStories;