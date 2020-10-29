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

        fetch('http://localhost:9000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        }   
    return (
        <div className='mb-5'>
            <form className='mt-5' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            {/* <form className="p-5" onSubmit={handleSubmit} method="post" >
            <div className="form-group">
                <input type="text"  onBlur={handleBlur} placeholder="Your Name/company's name" name="name" className="form-control" />
            </div>
            <div className="form-group">
                <input type="text" onBlur={handleBlur} placeholder="Your email address" className="form-control" />
                  </div>
            <div className="form-group">
                <input type="text" onBlur={handleBlur} placeholder="Graphic design" className="form-control" />
                </div>
            <div className="form-group">
                <input type="text"  onBlur={handleBlur} placeholder="Project Details" className="form-control" />
                   </div>
            <div className="form-group row">
                <div className='col-6'>
                <input className="form-control" onBlur={handleBlur} placeholder="Price" type="number" />
                 </div>
                <div className='col-6'>
                <input ref={register({ required: true })} className="form-control" name="file" placeholder="Upload project file" type="file" />
                {errors.file && <span className="text-danger">This field is required</span>}
                </div> 
            </div>
            <div className="form-group text-left">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form> */}
        </div>
    );
};

export default ServiceOrder;

