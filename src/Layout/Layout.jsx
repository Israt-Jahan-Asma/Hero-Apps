import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';

const Layout = () => {
    const navigation = useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            {
                navigation?.state === 'loading' ?<LoadingSpinner></LoadingSpinner>: <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        }
            
            <Footer></Footer>
        
        </div>
        
    );
};

export default Layout;