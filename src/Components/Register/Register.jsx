import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState('')

  const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('Register Click', email, "pass:", password)


        // const length6Pattern = /^.{6,}$/;
        // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        // const specialCharPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/

        // if(!length6Pattern.test(password)){
        //   console.log("password didnt match")
        //   setError('Password must be 6 characters or longer')
        //   return;
        // }
        // else if(!casePattern.test(password)){
        //   setError('Password Must be one uppercase or lowercase character')
        //   console.log('password Dont Recognize')
        //   return;
        // }
        // else if(!specialCharPattern.test(password)){
        //   setError('Password Must be contain at least one special character (e.g. ! @ # $ % ^ & *).')
        //   return;
        // }



        const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/;

        if(strongPattern.test(password)){
          setError('password must be ')
          return
        }






        // if(password){
        //     return alert(password)
        // }
        // else{
        //     return alert('You are Fraud Mother Fucker')
        // }



        setError('');
        setSuccess(false)

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log('register click' ,userCredentials.user)
        })
        .catch(error => {
          console.log('error Happened' ,error)
          setError(error.message)
        })


    }


    const togglePasswordShow = (event) => {
      event.preventDefault();
      setShowPassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <div className=' relative'>
          <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
          <button onClick={togglePasswordShow} className='btn btn-xs top-2 right-2 absolute'>{ showPassword ? <FaEyeSlash/> : <FaEye/>}</button>
          </div>
          <div>
            <label class='label'>
              <input type="checkbox" name="" class='checkbox' id="" />Accept Our Terms & Conditions
            </label>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        {
          success && <p className='text-green-500'>Account Created Succesfully.</p>
        }

        {
          error && <p className='text-red-500'>{error}</p>
        }
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;