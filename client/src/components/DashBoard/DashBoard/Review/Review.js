import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const CustomerReview = () => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:9000/addReview',{
            method: 'POST',
            headers: {
               'Content-Type':'application/json' 
            },
            body:JSON.stringify(data)

        })
    }
    
    return (
        <div>
            <form className='p-5 align-left' onSubmit={handleSubmit(onSubmit)}>
            <input name="name"  ref={register({ required: true })} className="form-control"  placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}
            <br/>
            <input name="email" ref={register({ required: true })} className="form-control"  placeholder="Company's name"/>
            {errors.email && <span className="error">Email is required</span>}
            <br/>
            <textarea name="description" ref={register({ required: true })} className="form-control" cols="10" rows="5" placeholder="Description"></textarea>
            <br/>       
            <input className='btn btn-brand' type="submit" />
            </form>
        </div>
    );
};

export default CustomerReview;