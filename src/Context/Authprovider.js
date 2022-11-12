import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'


export const Authcontext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setuser] = useState();
    const [loading,setloading] = useState(true);

    const createUser = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }
   
    useEffect (()=>{
      const Unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setuser(currentUser);
            setloading(false)
        });
        return ()=>{
            return Unsubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        


    }
    return (
        <Authcontext.Provider value  ={authInfo}>

            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;