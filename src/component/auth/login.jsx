import React from 'react';
import { useState } from 'react';

export const Login = ({ handellogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () => {
        handellogin(email, password);
        setEmail("");
        setPassword("");    
    }

  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='border-2 border-red-600 p-6 rounded-lg'>
            <form onSubmit={(e)=>{
                submitHandler(e);
                e.preventDefault();
            }}
            className='flex flex-col items-center justify-center p-5 '>
                <input value={email} required onChange={(e)=>{
                    setEmail(e.target.value)
                    ;
                }}
                type="email" placeholder='Enter your email' className='border-2  border-red-600 m-2 p-2 rounded-full
                placeholder:text-white '/>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required type="password" placeholder='Enter your password' className='border-2  border-red-600 m-2 p-2 rounded-full 
                placeholder:text-white'/>
                <button type='submit' className='bg-green-600 text-white m-2 p-2 rounded-full w-40'>Login</button>
            </form>
        </div>
    </div>
  )
}
export default Login;