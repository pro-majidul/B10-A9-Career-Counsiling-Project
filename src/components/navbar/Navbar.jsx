import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <NavLink to='/' className='font-normal btn'> Home</NavLink>
                        <NavLink to='/service' className='font-normal btn'> Service</NavLink>
                        <NavLink to='/profile' className='font-normal btn'> My Profile</NavLink>
                        <NavLink to='/contact' className='font-normal btn'> Contact Us</NavLink>
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost md:text-3xl font-bold'>Career Counsiling </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-normal btn btn-primary' : 'font-normal btn'}> Home</NavLink>
                    <NavLink to='/service' className={({ isActive }) => isActive ? 'font-normal btn btn-primary' : 'font-normal btn'}> Service</NavLink>
                    <NavLink to='/profile' className={({ isActive }) => isActive ? 'font-normal btn btn-primary' : 'font-normal btn'}> My Profile</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-normal btn btn-primary' : 'font-normal btn'}> Contact Us</NavLink>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ?
                        <div className='flex items-center gap-2'>
                            <img data-tooltip-id="my-tooltip-2" referrerPolicy="no-referrer" className='w-10 h-10 rounded-full' src={user?.photoURL} alt={user.email} />
                            <ReactTooltip
                                id="my-tooltip-2"
                                place="bottom"
                                variant="info"
                                content={user.displayName}
                            />
                            <button onClick={userLogOut} className={'font-normal btn-sm md:btn-md btn btn-primary'}>Log Out</button>
                        </div>
                        : <NavLink to='/login' className={({ isActive }) => isActive ? 'font-normal btn-sm md:btn-md btn btn-primary' : 'btn-sm md:btn-md font-normal btn'}>Login</NavLink>
                }


            </div>
        </div>
    );
};

export default Navbar;