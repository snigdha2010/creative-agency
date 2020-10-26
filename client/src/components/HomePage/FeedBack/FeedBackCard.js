import React from 'react';

const FeedBackCard = ({feedback}) => {
    return (
        <div className='col-md-4 mt-5 mb-5'> 
            <div style={{border:'1px solid lightGrey', backgroundColor:'#E5E5E5'}} className='card p-3'>
                <div className='card-body'>
            <div className='d-flex'>
                <img height='50px' src={feedback.img} alt=""/>
                <div className='p-2 card-title'>
                <h5>{feedback.name}</h5>
                <h6>{feedback.title}</h6>
                </div>
            </div>
            <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam sint quisquam incidunt! Repudiandae, omnis.</p>
        </div></div>
        </div>
       
    );
};

export default FeedBackCard;