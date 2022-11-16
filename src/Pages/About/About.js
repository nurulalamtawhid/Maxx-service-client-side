import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="py-6 text-gray-900">
            <h1 className='text-center'>Lets see the honorarium</h1>
        <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
            <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 ">
                <span className="text-sm">Basic</span>
                <p className="text-5xl font-bold text-center">10$</p>
                <p className="font-semibold text-center">You are cordially invited to start the journey With basic Plan </p>
                <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-300"><Link className='no-underline text-gray-900' to='/register'>Sign up</Link></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-slate-600 text-gray-50">
                <span className="text-sm font-semibold">Advanced</span>
                <p className="text-5xl font-bold">50$</p>
                <p className="font-semibold">Those who are thinking to upgrade your self & to move on for carrer..its for them</p>
                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-100 "><Link className='no-underline text-gray-900' to='/register'>Sign up</Link></button>
            </div>
        </div>
    </section>
    );
};

export default About;