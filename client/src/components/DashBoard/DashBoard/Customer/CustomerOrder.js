import React, {  useState } from 'react';

const ServiceOrder = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('design', info.design);
        formData.append('detail', info.detail);
        formData.append('price', info.price);


        fetch('https://fast-bastion-55056.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log("orders",data)
            })
            .catch(error => {
                console.error(error)
            })
        }  
    return (
        <>
        <h5 className='mt-3'>Order</h5>
        <div className='mb-5 align-left'>
            <form  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name/Company's Name" />
                    </div> 
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your Email address" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="design" placeholder="Graphic Design" />
                    </div>
                    <div className="form-group">
                        <textarea onBlur={handleBlur}className="form-control" col='5' rows='5' name="detail" placeholder="Project Details" />
                    </div>
                    <div className='row'>
                        <div className="col-md-6 form-group">
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" />
                        </div>
                        <div className="col-md-6 form-group">
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-brand">Submit</button>
                </form>
        </div>
        </>
    );
};

export default ServiceOrder;

