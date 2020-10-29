import React, { useEffect, useState, useContext } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBackCard from './FeedBackCard';
import { UserContext } from '../../../App';

const FeedBack = () => {
    const [ feedBack, setFeedBack ] = useState([]);
    useEffect(()=>{
        fetch('https://fast-bastion-55056.herokuapp.com/customer/reviews')
        .then(res=> res.json())
        .then(data => {
        setFeedBack(data);
        })
    },[])
 
    return (
        <section className='container mt-5' >
            <h5 className='text-center'>Clients <span style={{color:'#7AB259'}}>FeedBack</span></h5>
            <div className='row'>
                {
                    feedBack.map(feedback=><FeedBackCard
                    key={feedback._id} 
                    feedback= {feedback}
                    ></FeedBackCard>)
                }
            </div>
        </section>
    );
};

export default FeedBack;