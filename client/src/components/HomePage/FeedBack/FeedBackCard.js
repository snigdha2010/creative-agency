import React from 'react';

const FeedBackCard = ({feedback}) => {
    return (
        <div className='col-md-4 mt-5 mb-5'> 
            <div style={{border:'1px solid lightGrey', backgroundColor:'#E5E5E5',height:'300px'}} className='card p-3'>
                <div className='card-body'>
            <div className='d-flex'>
                <div className='mt-3 pr-2'><img style={{borderRadius:'50%'}} height='50px' src={feedback.review.img} alt=""/></div>
                <div className='p-2 card-title align-left'>  
                <h5>{feedback.review.name}</h5>
                <h6>{feedback.review.company}</h6>
                </div>
            </div>
            <p style={{textAlign:'left'}}>{feedback.review.description}</p>
        </div></div>
        </div>
       
    );
};

export default FeedBackCard;