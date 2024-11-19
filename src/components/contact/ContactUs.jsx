import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const ContactUs = () => {
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content items-start flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="md:text-4xl font-bold">Feel Free to Contact with Us</h1>
                        <p className="py-6">
                        Located at United International University, this center offers services such as job placement, resume writing, interview techniques, and more
                        </p>
                        <p className='mb-3'>Phone</p>
                        <hr />
                        <p className='flex my-2 items-center gap-2'><FaPhoneAlt /> <a className='text-xl' > 01402327683</a> </p>
                        <p className='flex my-2 items-center gap-2'><FaPhoneAlt /> <a className='text-xl' > 01582569820</a> </p>

                        <p className='mb-2 md:mt-8'>Email</p>
                        <hr />
                        <p className='flex my-2 items-center gap-2'><MdOutlineEmail /> <a className='text-xl' > majidul123tub@gmail.com</a></p>

                    </div>
                    <div className="card w-full max-w-md p-3 shrink-0 shadow-2xl">
                        <h3 className='md:text-4xl  font-bold'>Leave a Message Here</h3>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile No*</span>
                                </label>
                                <input type="text" placeholder="Mobile No" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address*</span>
                                </label>
                                <input type="email" placeholder="Enter Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Messege</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;