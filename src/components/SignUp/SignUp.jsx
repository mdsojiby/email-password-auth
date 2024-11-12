import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Register/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [errorMessage,setErrorMessage]=useState('');
    const [success,setSuccess]=useState(false)
    const [showPassword,setShowPassword]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        const terms=e.target.terms.checked
        console.log(email,password, name,photo,terms)

        setErrorMessage('')
        setSuccess(false)

        if(!terms){
            setErrorMessage('This is not currect value')
            return;
        }

        if(password.length<6){
            setErrorMessage('this password should not take is')
            return;
        }

     

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true)
        })


        sendEmailVerification(auth.currentUser)
        .then(()=>{
            console.log('email verification')
        })

        const profile={
            displayName:name,
            photoUrl:photo
        }

        updateProfile(auth.currentUser,profile)
        .then(()=>{
            console.log('photo is correct')
        })
        .catch(error=>
            console.log('photo is incorected')
        )

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
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                <button  onClick={()=> setShowPassword(!showPassword)} 
                className='btn btn-xs absolute right-4 top-12'>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
           <label className="label cursor-pointer justify-start">
           <input type="checkbox" name='terms' className="checkbox" />
          <span className="label-text ml-4">This is our accepect and condition</span>
       
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

        <p>Already have a account? please  <Link to="/login">Log in</Link></p>
          </div>

          
      
    );
};

export default SignUp;