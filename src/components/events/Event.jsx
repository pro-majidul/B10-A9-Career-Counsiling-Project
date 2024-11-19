import React from 'react';
import { FaAward, FaBook, FaGraduationCap, FaUsers } from 'react-icons/fa';

const Event = () => {
    return (
        <div className='bg-gray-500 p-10 rounded-md'>
            <div className="md:flex space-y-5 md:space-y-0 justify-around">
                <div className=" bg-green-500 p-6 rounded-sm hover:translate-y-2 duration-75 ">
                    <p className='text-center text-white'><FaUsers size={100} /></p>
                    <div className="text-white text-xl font-bold">Student Enrole 10K</div>
                </div>

                <div className=" bg-orange-400 p-6 rounded-sm hover:translate-y-2 duration-75 ">
                <p className='text-center text-white'><FaGraduationCap size={100} /></p>
                <div className="text-white text-xl font-bold">PHD Professors 150+</div>
                </div>

                <div className=" bg-blue-500 p-6 rounded-sm hover:translate-y-2 duration-75">
                <p className='text-center text-white'><FaBook size={100} /></p>
                <div className="text-white text-xl font-bold">Program Offered 29</div>
                </div>
                <div className=" bg-blue-500 p-6 rounded-sm hover:translate-y-2 duration-75">
                <p className='text-center text-white'><FaAward size={100} /></p>
                <div className="text-white text-xl font-bold">National Awards 10+</div>
                </div>
            </div>
        </div>
    );
};

export default Event;