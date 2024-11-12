

import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../Register/firebase.init';
import { Link } from 'react-router-dom';



const Login = () => {

    const [success,setSuccess]=useState(false)
    const [errorPassword,setErrorPassword]=useState('')

    const emailRef=useRef();



   const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)



    setSuccess(false)
    setErrorPassword('')


    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user)
        setSuccess(true)
    })

    .catch(error=>{
        console.log('ERROR',error.message)
        setErrorPassword(error.message)
    })

   }

   const handleForgotPassword=()=>{
    console.log('this is forgot password',emailRef.current.value)
    const email=emailRef.current.value;

    if(!email){
        console.log('this is aleart off email')
    }
    else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('forget and collect this password')
        })
    }
   }



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"   name='email' placeholder="email" ref={emailRef} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label onClick={handleForgotPassword} className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>


      </form>

      {
        success && <p className='text-green-600'> This is correct</p>
      }

      {
        errorPassword && <p className='text-red-600'>{errorPassword}</p>
      }

      <p>Nwe to website ? please <Link to="/SignUp"  >Sign in</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;