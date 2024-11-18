import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';

const Register = () => {
    const { signUpUser, updateUserProfile, setUser, googleLogin } = useContext(AuthContext)
    const handelRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        if (password.length < 6) {
            return alert('password must be 6 charector')
        }
        if (/[A-Z]/.test(password)) {
            return alert('provide an Uppercase Latter')
        }
        if (/[a-z]/.test(password)) {
            return ('provide an lowercase latter')
        }
        signUpUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then((result) => {
                        setUser(result.user)
                        alert('userlogin success')
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const googleloginhandler = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.code);
            })
        console.log('google login added');
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
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo-url" className="input input-bordered" required />
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
                <p className='text-center'>or</p>
                <div className='w-1/2 my-3 mx-auto'>
                    <button onClick={googleloginhandler} className="btn btn-primary">Login with Google</button>
                </div>
                <p className='ml-6'>Allready have an account  <Link to='/login' className='text-red-500'>Login</Link> Now </p>
            </div>
        </div>

    )
};

export default Register;