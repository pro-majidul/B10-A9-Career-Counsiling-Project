import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Rating from '@mui/material/Rating';


const DetailsCard = () => {
    const { image, description, duration, rating, counselor, price, category, serviceName } = useLoaderData()

    const textRef = useRef();
    const [info, setInfo] = useState(null)
    const submitFeedback = () => {
        const inputText = textRef.current.value;
        setInfo(inputText)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}

            className='hero min-h-screen'>
            <Helmet>
                <title>Details Card</title>
                <meta name="description" content="Nested component" />
            </Helmet>




            <div className="hero-content block">
                <div className="card p-6 bg-base-100 md:w-8/12 mx-auto  md:my-5 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-5 space-y-2">
                        <div className='md:flex items-center justify-between'>
                        <h2 className="card-title">Category: {category}</h2>
                        <p className=''>Time : {duration}</p>
                        </div>
                        <h2 className="card-title">Service Name : {serviceName}</h2>
                        <h2 className="card-title">Counselor : {counselor}</h2>
                        <p className='flex items-center gap-3'> <span className='card-title'>Descriptions : </span> {description}</p>
                        <div className='md:flex items-center justify-between'>
                            <h3 className='card-title'>Price : {price}</h3>
                            <p className='items-center flex gap-2'><Rating name="read-only" value={rating} readOnly /> {rating}</p>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <div>
                        {
                            info && <div className='bg-green-300 md:w-4/12 mx-auto p-6 rounded-xl my-2 py-2'>
                                <h3 className='text-2xl font-semibold text-black '>{info}</h3>
                            </div>
                        }
                    </div>
                    <div className='md:w-8/12 md:mt-10 mt-4 mx-auto'>
                        <textarea rows={3} ref={textRef} className="textarea w-full   textarea-bordered" placeholder="Enter Your Feedback"></textarea>
                        <button onClick={submitFeedback} className='btn md:btn-md btn-sm btn-primary' type="submit">Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;