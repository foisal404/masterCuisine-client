import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleForm=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log('submit form',email,password)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body pb-3" onSubmit={handleForm}>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <p className='text-xs'>New here?<Link className='text-orange-400' to='/register'>Register</Link></p>
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </form>
                        
                        
                        <div className='card-body py-5'>
                            <button className="btn btn-outline"><FaGoogle/> Login With Google</button>
                            <button className="btn btn-outline"><FaGithub/> Login with Github</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;