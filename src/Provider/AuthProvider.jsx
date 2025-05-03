import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext()
import app from '../Firebase/firebase.config';

const auth= getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user)

    
    const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser =()=>{
        return signOut(auth).then(()=>
        { 
            alert("user loggedOut successfully")
        }).catch(error=>{
            console.log(error)
        })
        
    }
    useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        
    });
    
    return ()=>{
        unSubscribe();
        
    }

},[])
    const authData ={
        user,
        setUser,
        createUser,
        logInUser,
        logOutUser
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;