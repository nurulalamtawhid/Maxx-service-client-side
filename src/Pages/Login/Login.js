import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle  } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Authcontext } from '../../Context/Authprovider';
import {  GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {login,providerlogin,loading} = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||'/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password);
        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const currentuser ={
                email :user.email
            }
           console.log(currentuser);

            navigate(from,{replace : true})
        })
        .catch(error => console.log(error))
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        providerlogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace : true})
        })
        .catch(error => console.error(error))
    }
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-600"></div>
    }
    return (
        <section className="p-6  text-gray-900 mt-24">
        <form onSubmit={handleLogin}  action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Log In</p>
                    <p className="text-xs">You must Need to Login before go</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                    <div className="col-span-full sm:col-span-3">
                        <label  className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400 border-gray-300 text-gray-900" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label  className="text-sm">Password</label>
                        <input id="password" type="Password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" required />
                    </div>

                </div>
                <Button type="submit" className=" lg:px-4  font-semibold rounded-full bg-indigo-500 text-gray-100">Login</Button>
                
                <Button  onClick={ handleGoogleSignIn}  variant="outline-secondary" className="mx-2 font-semibold rounded-full text-gray-100 d-flex align-items-center sm:flex-col "><FaGoogle></FaGoogle>Google logIn</Button>
                <p><Link to ={'/register'} className="mt-4"> want to register</Link></p>
            </fieldset>

        </form>
    </section>
    );
};

export default Login;