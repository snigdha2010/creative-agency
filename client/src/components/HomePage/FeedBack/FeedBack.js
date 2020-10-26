import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBackCard from './FeedBackCard';

const FeedBack = () => {
    const fakeData = [
        {id:'01',name:'Nash Patrik', title:'CEO,Manpol', img: customer1},
        {id:'02',name:'Miriam Barron', title:'CEO,Manpol', img: customer2},
        {id:'01',name:'Baria Malone', title:'CEO,Manpol', img: customer3}
    ]
    return (
        <section className='container mt-5' >
            <h5 className='text-center'>Clients <span style={{color:'#7AB259'}}>FeedBack</span></h5>
            <div className='row'>
                {
                    fakeData.map(feedback=><FeedBackCard
                    key={feedback.id} 
                    feedback= {feedback}
                    ></FeedBackCard>)
                }
            </div>
        </section>
    );
};

export default FeedBack;