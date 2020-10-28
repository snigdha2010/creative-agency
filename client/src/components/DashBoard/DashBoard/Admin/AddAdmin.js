import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:9000/addAdmin',{
            method: 'POST',
            headers: {
               'Content-Type':'application/json' 
            },
            body:JSON.stringify(data)

        })
    }

    return (
        <div className='p-5 align-left'> 
            <h5>Email</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-8'>
                        <input name="email"  ref={register({ required: true })} className="form-control"  placeholder="john@gmail.com" />
                        {errors.name && <span className="error">Name is required</span>}
                    </div>
                    <div className='col-4'>
                        <input className='btn' style={{backgroundColor:'#009444',color:"white"}} type="submit" />
                    </div>
                </div>
           
            </form>
            
        </div>
    );
};

export default Admin;