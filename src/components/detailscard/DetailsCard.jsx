import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
    const { image, learnMore, description, duration, rating, counselor, price, category, serviceName } = useLoaderData()

    return (
        <div
        style={{
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center',
            backgroundSize : 'cover',
        }} 
        
        className='hero min-h-screen'>
            <Helmet>
                <title>Details Card</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="hero-content block">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div>
                <textarea rows={10} className="textarea w-full   textarea-bordered" placeholder="Enter Your Feedback"></textarea>
                <button className='btn md:btn-md btn-sm btn-primary' type="submit">Feedback</button>
                    {/* <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;