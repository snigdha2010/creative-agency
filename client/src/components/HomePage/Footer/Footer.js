import React from 'react';
import CustomerForm from '../CustomerForm/CustomerForm';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#FBD062', height:'600px'}}>
            <CustomerForm/>
            <small className='text-center'>copyright Orange labs 2020</small>
        </div>
    );
};

export default Footer;