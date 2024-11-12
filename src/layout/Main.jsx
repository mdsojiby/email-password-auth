import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Outlet></Outlet>
            <Header></Header>
        </div>
    );
};

export default Main;