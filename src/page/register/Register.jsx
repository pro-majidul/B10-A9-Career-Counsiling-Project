import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handelRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        console.log(email, password, name, photo);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 p-6 w-full max-w-md shrink-0 shadow-2xl">
                <h3 className='font-semibold text-3xl ml-6'>Register Now</h3>
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='ml-6'>Allready have an account  <Link to='/login' className='text-red-500'>Login</Link> Now </p>
            </div>
        </div>

    )
};

export default Register;