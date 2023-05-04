import React, { useContext } from 'react';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    // console.log(user?.photoUrl);
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            console.log("log out sucessfullly");
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <nav>
            <div className="navbar bg-base-300 flex  items-center sm:flex-row flex-wrap sm:flex-nowrap justify-center">
                <div className="md:navbar-start flex-grow-1 md:flex-grow-0">
                    <a className="btn btn-ghost normal-case text-xl sm:text-center"><Link to='/'>Master Cuisine</Link></a>
                </div>
                
                <div className="md:navbar-center  lg:flex">
                        <ul className="menu menu-horizontal px-1 lg:flex flex-row flex-wrap md:gap-6">
                            <ActiveLink  to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                        </ul>
                </div>
                <div className="md:navbar-end">
                    
                    {
                        user?<div className='flex items-center ' >

                                {
                                    user?.photoURL ? 
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="w-10 rounded-full " >
                                            <img src={user?.photoURL} />
                                        </div>
                                        </label>
                                        : <h2>{user?.email}</h2>
                                }
                                <button className='btn-success p-2 px-3 rounded' onClick={handleLogout}>Logout</button> 
                            </div>:
                            <ActiveLink to='/login'><button className='bg-slate-500 text-white px-7 py-2 rounded'>login</button></ActiveLink>
                    }
                </div>
                

            </div>
        </nav>
    );
};

export default Header;