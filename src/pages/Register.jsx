import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <>
        
    
        <div className="card bg-base-100 w-full mx-auto py-5 px-8 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body space-y-5">
          <h1 className="text-xl font-bold text-center mb-3">Register your account!</h1>
          <hr className='text-gray-300'/>
            <form className="space-y-3 flex flex-col pt-3">
              <label className="label text-primary font-bold">Your name</label>
              <input type="text" className="input bg-base-200 border-0" placeholder="write your name.." />
              <label className="label text-primary font-bold">Photo URL</label>
              <input type="text" className="input bg-base-200 border-0" placeholder="Enter your photo url" />
              <label className="label text-primary font-bold">Email Address</label>
              <input type="email" className="input bg-base-200 border-0" placeholder="Email" />
              <label className="label text-primary font-bold">Password</label>
              <input type="password" className="input bg-base-200 border-0" placeholder="Password" />
              
              <button className="btn btn-secondary mt-4">Register</button>
            </form>
            <div className='text-center'><p>Already have an account ? <Link to='/auth/login' className="link link-hover text-blue-500 font-medium">Login</Link></p></div>
          </div>
        </div>
     
            </>
    );
};

export default Register;