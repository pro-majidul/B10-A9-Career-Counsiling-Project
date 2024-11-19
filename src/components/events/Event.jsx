import React from 'react';
import { FaAward, FaBook, FaGraduationCap, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
    AOS.init();
    return (
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic"  data-aos-duration="1000" className='bg-gray-500 p-10 rounded-md'>
            <div className="md:flex space-y-5 md:space-y-0 justify-around">
                <div  data-aos="fade-right" className=" bg-green-500 p-6 rounded-sm hover:translate-y-2 duration-75 ">
                    <p className='text-center text-white'><FaUsers size={100} /></p>
                    <div className="text-white text-xl font-bold">Student Enrole 10K</div>
                </div>

                <div data-aos="fade-up-left" className=" bg-orange-400 p-6 rounded-sm hover:translate-y-2 duration-75 ">
                <p className='text-center text-white'><FaGraduationCap size={100} /></p>
                <div className="text-white text-xl font-bold">PHD Professors 150+</div>
                </div>

                <div data-aos="fade-up-right" className=" bg-blue-500 p-6 rounded-sm hover:translate-y-2 duration-75">
                <p className='text-center text-white'><FaBook size={100} /></p>
                <div className="text-white text-xl font-bold">Program Offered 29</div>
                </div>
                <div data-aos="fade-left" className=" bg-blue-500 p-6 rounded-sm hover:translate-y-2 duration-75">
                <p className='text-center text-white'><FaAward size={100} /></p>
                <div className="text-white text-xl font-bold">National Awards 10+</div>
                </div>
            </div>
        </div>
    );
};

export default Event;