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
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                        <a className="justify-between">
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><Link to='/'>Master Cuisine</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex flex-row gap-6">
                        <ActiveLink  to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    
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