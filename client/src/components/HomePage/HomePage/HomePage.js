import React from 'react';
import Header from '../Header/Header';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Clients/>
            <Services/>
        </div>
    );
};

export default HomePage;