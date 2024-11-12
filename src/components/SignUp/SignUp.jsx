import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Register/firebase.init';


const SignUp = () => {

    const [errorMessage,setErrorMessage]=useState('');
    const [success,setSuccess]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        setErrorMessage('')
        setSuccess(false)

        if(password.length<6){
            setErrorMessage('this password should not take is')
            return;
        }

     

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true)
        })

        .catch (error=>{
            console.log('ERROR',error.message)
            setErrorMessage(error.message)
            setSuccess(false)
        })
       

        


    }
    return (
  
         
          <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">

          <h3 className="text-3xl ml-4 font-bold">SignUp now!</h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>

        {
            errorMessage && <p className='text-red-500'>{errorMessage}</p>
        }

        {
            success && <p className='text-green-600'>This is success guy</p>
        }
          </div>

          
      
    );
};

export default SignUp;