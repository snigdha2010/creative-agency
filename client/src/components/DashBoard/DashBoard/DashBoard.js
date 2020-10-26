import React from 'react';
import DashBoradHeader from './DashBoradHeader';

const DashBoard = () => {
    return (
        <main>
            <DashBoradHeader/>
             <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-9'></div> 
        </div>
        </main>
       
    );
};

export default DashBoard;