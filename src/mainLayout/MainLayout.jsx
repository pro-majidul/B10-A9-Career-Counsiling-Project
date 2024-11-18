import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-2 py-2 min-h-[calc(90vh-232px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;