import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/users';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import './MainLayout.css';

function MainLayout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <main className='main'>
            <Header />

            <section className='content'>
                <SideBar />

                <div className='children'>
                    {children}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default MainLayout;
