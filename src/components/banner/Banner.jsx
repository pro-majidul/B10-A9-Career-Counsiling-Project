import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item min-h-[calc(90vh-323px)] relative w-full">
                <div className="hero bg-slide1 backdrop-brightness-0">
                    <div className="hero-content text-center">
                        <div className="max-w-xl">
                            <h1 className="md:text-3xl font-bold text-white uppercase">Welcome to our Varsity</h1>
                            <p className="py-6 text-white text-xl md:text-5xl font-bold">
                                Education is the best key success in life
                            </p>
                            <Link to='/service'>
                                <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero bg-slide2">
                    <div className="hero-content text-center">
                        <div className="max-w-xl">
                        <h1 className="md:text-3xl font-bold text-white uppercase">Welcome to Online Education</h1>
                            <p className="py-6 text-white text-xl md:text-5xl font-bold">
                                Education is the backbone of a nation
                            </p>
                            <Link to='/service'>
                                <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero bg-slide3 backdrop-brightness-50">
                    <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="md:text-3xl font-bold text-white uppercase">Welcome to Our Organization</h1>
                            <p className="py-6 text-white text-xl md:text-5xl font-bold">
                                Education is the best key Success in life
                            </p>
                            <Link to='/service'>
                                <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello 44</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;