import React from 'react';

const WorkSlide = ({slide,isActive}) => {
    return (
        <div>
            <img height='200px' src={slide.img} alt=""/>
        </div>
    );
};

export default WorkSlide;