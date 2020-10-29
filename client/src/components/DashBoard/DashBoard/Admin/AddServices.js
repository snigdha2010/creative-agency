import React, { useState } from 'react';

const AddServices = () => {
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
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://fast-bastion-55056.herokuapp.com/addService', {
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
        <div>
              <form className='mt-5' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <textarea name="description"  onBlur={handleBlur} col='5' rows='5' className="form-control" placeholder="Enter Designation"></textarea>
                    </div>
                    <div className="form-group">
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload image" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            
        </div>
    );
};

export default AddServices;