import Header from '@components/Header/Header';
import './styles.module.scss';
import React from 'react';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default HomePage;
