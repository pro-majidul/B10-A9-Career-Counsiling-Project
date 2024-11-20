import React from 'react';

const Footer = () => {
    return (
        <div>
           
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <h3 className='md:text-5xl text-3xl font-bold'>Career Counsiling</h3>
                    <p>
                        United International University
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Online</a>
                    <a className="link link-hover">Ofline</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Group </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;