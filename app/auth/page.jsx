"use client"
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Login from './login';
import SignUp from './Signup';


const AuthForm = () => {
  const { login } = useAuth()
  const [isLogin, setIsLogin] = useState(true);


  const handleAuthSelection = () => {
    setIsLogin(prevState => !prevState)
  }


  

  return (
    <div className=" font-title">
      <h3 className=' flex justify-center items-center gap-5 mt-7'>
        <p onClick={handleAuthSelection} className={`${isLogin ? 'text-black' : 'text-slate-400'} cursor-pointer font-bold`}>Signin</p>
        <p onClick={handleAuthSelection} className={`${!isLogin ? 'text-black' : 'text-slate-400'} cursor-pointer font-bold`}>SignUp</p>
      </h3>
      { isLogin ? <Login /> : <SignUp />}
    </div>
  );
};

export default AuthForm;