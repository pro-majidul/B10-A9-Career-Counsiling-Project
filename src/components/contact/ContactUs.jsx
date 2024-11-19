import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    AOS.init();
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content gap-10 items-start flex-col lg:flex-row-reverse">
                    <div data-aos="zoom-in-left" className="text-center  lg:text-left">
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
                        <p className='flex my-2 items-center gap-2'><MdOutlineEmail size={24} /> <a className='text-xl' > majidul123tub@gmail.com</a></p>

                    </div>
                    <div data-aos="zoom-in-right" className="card w-full md:max-w-md p-3 shrink-0 shadow-2xl">
                        <h3 className='md:text-4xl  font-bold'>Leave a Message Here</h3>
                        <form className="w-full  bg-white rounded-lg items-center">
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
            <div>
               
            </div>
        </div>
    );
};

export default ContactUs;