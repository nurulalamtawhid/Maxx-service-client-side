import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/Authprovider';

const Register = () => {
    const {createUser} = useContext(Authcontext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const user= result.user;
            console.log(user);
            form.reset();
        })
        .catch(err => console.error(err));

    }
    return (
        <section className="p-6  text-gray-900 mt-24">
        <form onSubmit={handleSignUp} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Lets Register Your Self</p>
                    <p className="text-xs">Thank you for being With us</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Your Name</label>
                        <input id="name" type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-300 text-gray-900" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label  className="text-sm">PhotoUrl</label>
                        <input id="photourl" type="text" placeholder="PhotoUrl" className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-300 text-gray-900" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label  className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 text-gray-900" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label  className="text-sm">Password</label>
                        <input id="password" type="Password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 text-gray-900" required />
                    </div>

                </div>
                <button type="submit" className=" lg:px-6  font-normal rounded-full bg-indigo-500 text-gray-100">Register</button>
                <p><Link to ={'/login'}> Login</Link></p>
                
            </fieldset>
          

        </form>
    </section>
    );
};

export default Register;