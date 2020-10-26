import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Clients = () => {
    return (
        <section className='container d-flex justify-content-around pt-5'>
            <img style={{height:'30px'}} src={slack} alt=""/>
            <img style={{height:'30px'}} src={google} alt=""/>
            <img style={{height:'30px'}} src={uber} alt=""/>
            <img style={{height:'35px'}} src={netflix} alt=""/>
            <img style={{height:'35px'}} src={airbnb} alt=""/>
        </section>
    );
};

export default Clients;