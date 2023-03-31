import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components';

const DefaultLayout = () => {
    return (
        <div className='default-layout-container'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;