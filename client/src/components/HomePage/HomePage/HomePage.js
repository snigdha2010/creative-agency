import React from 'react';
import Header from '../Header/Header';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import SampleWork from '../SampleWork/SampleWork';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Clients/>
            <Services/>
            <SampleWork/>
            <FeedBack/>
            <Footer/>
        </div>
    );
};

export default HomePage;