import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Register = () => {
    const {SignUp,updateUser}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleForm=event=>{
        event.preventDefault();
        setError('')
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photo=form.photo.value;
        
        
        if(!email){
            setError('please enter email')
            return
        }
        if(!password){
            setError('please enter password')
            return
        }
        
        
        if(password.length<6){
            setError('password at least 6 charecter')
            return
        }
        
        // console.log('submit form',email,password,photo,name)

        SignUp(email,password)
        .then(result=>{
            const loggUser=result.user;
            console.log(loggUser)
            console.log('successful sign up');
            if(name && photo){
                updateUser(name,photo)
                .then((result)=>{
                    console.log("success");
                    console.log(result.user);
                })
                .catch((error) => {
                    // An error occurred
                    console.error(error.message);
                  });
            }
        })
        .catch(error=>{
            setError(error.message.slice(22))
            console.error(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                    {/* error text  */}
                    {
                        <p className='text-center text-red-400 my-5'>{error}</p>
                    }
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleForm}>
                        {/* name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered"   />
                        </div>
                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered"   />
                        </div>
                        {/* password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered"   />
                            
                        </div>
                        {/* photo url  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Url" name='photo' className="input input-bordered"   />
                        </div>
                        <label className="label">
                            <p className='text-xs'>Already Acount?<Link className='text-emerald-500' to='/login'>Login</Link></p>
                        </label>
                        <button className="btn btn-primary" type='submit'>Register</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;