import React from 'react';

const CustomerForm = () => {
    return (
        <section className='container pt-5 pb-5 mb-3'>
            <div className='row'>
                <div className='col-md-6 '>
                    <div style={{textAlign:'left'}}>
                    <h5>strong Let us handle your <br/> project, professionally</h5>
                    <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form action="">
                        <div className='form-group'>
                             <input type="email" className="form-control" placeholder="Your email address"/>
                        </div>
                        <div className='form-group'>
                             <input type="text" className="form-control" placeholder="Your name / company's name"/>
                        </div>
                        <div className="form-group">
                           <textarea className="form-control" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="d-flex align-items-start">
                           <input type="button" className="btn btn-brand" value='Submit'/>
                       </div>
                    </form>
                </div>
            </div>
        
        </section>
    );
};

export default CustomerForm;