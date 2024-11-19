import { useContext,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('');
    
    const location = useLocation();
    const navigate = useNavigate()
    const { setUser, googleLogin, UserLogin,  } = useContext(AuthContext);



    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        UserLogin(email, password)
            .then((result) => {
                setUser(result.user)
                navigate(location.state ? location.state : '/')
                toast.success('user login successfully ')
            })
            .catch(error => {
                setError(error.code)
                toast.error(error.code)
            })
    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                navigate(location.state ? location.state : '/');
                toast.success('google user login successfully')
            })
            .catch(error => {
                setError(error.code)
                toast.error(error.code)
            })
    }

    return (

        <div className="hero bg-base-200 min-h-[calc(100vh-232px)]">
            <Helmet>
                <title>Login Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="card bg-base-100 p-6 w-full md:max-w-md shrink-0 shadow-2xl">
                <h3 className='font-semibold text-3xl ml-6'>Login Now </h3>
                <form onSubmit={handelLogin} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email'  type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link> 
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