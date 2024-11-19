import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../provider/Provider';
import { toast } from 'react-toastify';

const ForgetPass = () => {
    const { forgetPassword } = useContext(AuthContext)
    const emailRef = useRef();
    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast.warning('Please Provide an valide email')
        }
        else {

            forgetPassword(email)
                .then(() => {
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
                    <input name='email' ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button onClick={handelForgetPassword} className="btn btn-primary">Reset Password</button>
                </div>
            </div>


        </div>
    );
};

export default ForgetPass;