import { info } from 'daisyui/src/colors/colorNames';
import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Context/Authprovider';

const Privateroutes = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation();
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-600"></div>
    }
   if(user){
    return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Privateroutes;