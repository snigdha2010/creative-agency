import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main>
            <div className=' row mt-5'>
                <div className='col-md-6 p-5 '>
                    <div className='p-5' style={{textAlign:'left'}}>
                        <div>
                        <h2>Let's Grow Your <br/>Brand To The <br/> Next Level</h2>
                        <p className='mt-4'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, non deserunt! Quis, molestias fugit? Molestiae.</small><br/>    
                        </p>
                        <div className='mt-4'><button className="btn btn-brand my-2 my-sm-0" type="submit">Hire us</button> </div>
                        </div></div>
                     </div>
                <div className='col-md-6 p-5 '>
                    <img className='img-fluid p-5' src={frame} alt=""/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;