import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser,setUser} = use(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            
        })
        .catch(error=>{
            
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }

    return (
        <>
        
    
        <div className="card bg-base-100 w-full mx-auto py-5 px-8 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body space-y-5">
          <h1 className="text-xl font-bold text-center mb-3">Register your account!</h1>
          <hr className='text-gray-300'/>
            <form onSubmit={handleRegister} className="space-y-3 flex flex-col pt-3">
              <label className="label text-primary font-bold">Your name</label>
              <input
              name='name' 
              type="text" 
              className="input bg-base-200 border-0" 
              placeholder="write your name.."
              required />
              <label className="label text-primary font-bold">Photo URL</label>
              <input 
              name='photo'
              type="text" 
              className="input bg-base-200 border-0" 
              placeholder="Enter your photo url"
              required />
              <label className="label text-primary font-bold">Email Address</label>
              <input 
              name='email'
              type="email" 
              className="input bg-base-200 border-0" 
              placeholder="Email"
              required />
              <label className="label text-primary font-bold">Password</label>
              <input 
              name='password'
              type="password" 
              className="input bg-base-200 border-0" 
              placeholder="Password"
              required />
              
              <button  type='submit' className="btn btn-secondary mt-4">Register</button>
            </form>
            <div className='text-center'><p>Already have an account ? <Link to='/auth/login' className="link link-hover text-blue-500 font-medium">Login</Link></p></div>
          </div>
        </div>
     
            </>
    );
};

export default Register;