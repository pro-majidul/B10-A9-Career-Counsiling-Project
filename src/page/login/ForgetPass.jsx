import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../provider/Provider';

const ForgetPass = () => {
    const { forgetPassword } = useContext(AuthContext)
    const emailRef = useRef();
    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            return alert('please provide an email')
        }
        else {

            forgetPassword(email)
                .then(result => {
                    console.log(result);
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
                    <button onClick={handelForgetPassword} className="btn btn-primary">Submit</button>
                </div>
            </div>


        </div>
    );
};

export default ForgetPass;