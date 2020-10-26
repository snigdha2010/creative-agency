import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const fakeData = [
        {id:'01',img:service1, title: 'Web &  Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
        {id:'02',img:service2, title: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'},
        {id:'03',img:service3, title: 'Web Development', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
        {id:'04',img:service4, title: 'Web &  Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
        
    
    ]
    return (
        <section className='container text-center mt-5 pt-5'>
            <h5>Provide awesome <span style={{color:'#7AB259'}}> services</span></h5>
            <div className='row'>
                {
                    fakeData.map(service =><ServicesCard keys= {service.id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;