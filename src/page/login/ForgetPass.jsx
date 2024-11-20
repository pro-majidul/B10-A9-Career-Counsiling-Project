import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../provider/Provider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const ForgetPass = () => {
    let [searchparams , setSearchparams] = useSearchParams();
    const email = searchparams.get('email');
  
    const { forgetPassword } = useContext(AuthContext)
    const emailRef = useRef();
    const location = useLocation();
    const inputEmail = location.state?.emails || '';
    console.log(inputEmail);
    const navigate = useNavigate()
    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast.warning('Please Provide an valide email')
        }
        else {

            forgetPassword(email)
                .then(() => {
                    navigate('/login')
                   toast.success('password sent to your email. please check your email')
                })
        }



    }
    return (
        <div className='w-8/12 mx-auto'>
            <div className='card bg-base-300 card-body'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input defaultValue={email} name='email'  ref={emailRef}  placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button onClick={handelForgetPassword} className="btn btn-primary">Reset Password</button>
                </div>
            </div>


        </div>
    );
};

export default ForgetPass;