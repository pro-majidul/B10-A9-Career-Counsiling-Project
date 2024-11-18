import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';

const Login = () => {
    const [error, setError] = useState('')
    const { setUser, googleLogin, UserLogin } = useContext(AuthContext)
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        UserLogin(email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.code)
                console.log(error.code);

            })
    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.code)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-232px)]">

            <div className="card bg-base-100 p-6 w-full max-w-md shrink-0 shadow-2xl">
                <h3 className='font-semibold text-3xl ml-6'>Login Now </h3>
                <form onSubmit={handelLogin} className="card-body">

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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>


                    {
                        error && <p className='my-3 py-3 text-red-500'>{error} </p>
                    }
                </form>
                <p className='text-center pb-5'>or</p>
                <div className='w-1/2 mx-auto'>
                    <button onClick={handelGoogleLogin} className="btn btn-primary">Login with Google</button>
                </div>
                <p className='ml-6 my-3'>Not a member <Link to='/register' className='text-red-500'>Sign Up</Link> Now </p>

            </div>
        </div>
    );
};

export default Login;