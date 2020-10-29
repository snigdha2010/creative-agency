import React, { useEffect, useState } from 'react';
import FeedBackCard from './FeedBackCard';

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