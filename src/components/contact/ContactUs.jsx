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
                        <p className='flex my-2 items-center gap-2'><FaPhoneAlt /> <a  href="tel:+8801402327683" className='text-xl' > 01402327683</a> </p>
                        <p className='flex my-2 items-center gap-2'><FaPhoneAlt /> <a href="tel:+8801582569820"  className='text-xl' > 01582569820</a> </p>

                        <p className='mb-2 md:mt-8'>Email</p>
                        <hr />
                        <p className='flex my-2 items-center gap-2'><MdOutlineEmail size={24} /> <a href="mailto:majidul123tub@gmail.com"className='text-xl' > majidul123tub@gmail.com</a></p>

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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6986998792395!2d90.44456977581123!3d23.793741287110237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631%3A0x97f48a5be913a9fc!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1732093903122!5m2!1sen!2sbd" className='w-full h-[450px] border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactUs;