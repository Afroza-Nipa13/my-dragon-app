import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {logInUser,setUser}=use(AuthContext)

 const handleLogIn=(e)=>{

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    logInUser(email,password)
    .then(currentUser=>{
        const user = currentUser.user;
        setUser(user)
    }).catch(error=>{
        const errorMessage = error.message;
        alert(errorMessage)

    })
 }   
    return (
        <>
        
    
    <div className="card bg-base-100 w-full mx-auto py-5 px-8 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body space-y-5">
      <h1 className="text-2xl font-bold text-center mb-3">Login your account!</h1>
      <hr className='text-gray-300'/>
        <form onSubmit={handleLogIn} className="space-y-3 flex flex-col pt-3">
          <label className="label text-primary font-bold">Email Address</label>
          <input name='email' type="email" className="input bg-base-200 border-0" placeholder="Email" />
          <label className="label text-primary font-bold">Password</label>
          <input name='password' type="password" className="input bg-base-200 border-0" placeholder="Password" />
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
        <div className='text-center'><p>Don't have an account ? <Link to='/auth/register' className="link link-hover text-secondary font-medium">Register</Link></p></div>
      </div>
    </div>
 
        </>
    );
};

export default Login;