import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {
    const {githubIN,googleIN,logIn}=useContext(AuthContext)
    const [error,setError]=useState("")
    const location =useLocation();
    console.log(location);
    const handleForm=event=>{
        event.preventDefault();
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        
        // console.log('submit form',email,password)
        logIn(email,password)
        .then(result=>{
            const loggUser=result.user;
            console.log(loggUser)
            console.log('successful login');
        })
        .catch(error=>{
            setError(error.message.slice(22))
            console.error(error.message);
        })
        
    }
    const handlerGithub=()=>{
        githubIN()
        .then(result=>{
            const loggUser=result.user;
            console.log(loggUser)
            console.log('successful login');
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    const handlerGoogle=()=>{
        googleIN()
        .then(result=>{
            const loggUser=result.user;
            console.log(loggUser)
            console.log('successful login');
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {/* error text  */}
                    {
                        <p className='text-center text-red-400 my-5'>{error}</p>
                    }
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body pb-3" onSubmit={handleForm}>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                
                            </div>
                            <p className='text-xs'>New here?<Link className='text-orange-400' to='/register'>Register</Link></p>
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </form>
                        
                        
                        <div className='card-body py-5'>
                            <button className="btn btn-outline" onClick={handlerGoogle}><FaGoogle/> Login With Google</button>
                            <button className="btn btn-outline" onClick={handlerGithub}><FaGithub/> Login with Github</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;